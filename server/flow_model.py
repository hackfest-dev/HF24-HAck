import pandas as pd
from pyomo.opt import SolverFactory
from pyomo.environ import *

# Load city and port data
city_data = pd.read_csv('city.csv')
port_data = pd.read_csv('port.csv')

# Extract city names, demands, and ports
cities = city_data['Name'].values
city_demands = city_data.set_index('Name')['Demand'].to_dict()
ports = port_data['Name'].values
port_supplies = port_data.set_index('Name')['Supply'].to_dict()

# Load distance data
distance_data = pd.read_csv('distance.csv', index_col=0)

# Extract port names and city names
distance_ports = distance_data.index.tolist()
distance_cities = distance_data.columns.tolist()

# Create dictionary for distances
distancesDict = {(port, city): distance_data.loc[port, city] for port in distance_ports for city in distance_cities}

unit_cost=35

perishable=False

# Create Concrete Model
model = ConcreteModel()

if (not perishable):
    # Define sets
    model.ports = Set(initialize=ports)
    model.cities = Set(initialize=cities)

    # Parameters
    model.distance = Param(model.ports, model.cities, initialize=distancesDict)
    model.unitCost = Param(initialize=unit_cost)

    # Decision Variables
    model.flow = Var(model.ports, model.cities, domain=NonNegativeReals)

    # Objective Function
    def costCalc(model):
        return sum(model.unitCost * model.distance[port, city] * model.flow[port, city] for port in model.ports for city in model.cities)

    model.cost = Objective(rule=costCalc, sense=minimize)

    # Constraints
    def supplyConstraint(model, port):
        return sum(model.flow[port, city] for city in model.cities) <= port_supplies[port]

    model.supply_cons = Constraint(model.ports, rule=supplyConstraint)

    def demandConstraint(model, city):
        return sum(model.flow[port, city] for port in model.ports) >= city_demands[city]

    model.demand_cons = Constraint(model.cities, rule=demandConstraint)

    # Solve using GLPK solver
    results = SolverFactory("glpk").solve(model)

    if 'ok' == str(results.Solver.status):
        res_arr = [(port, city, model.flow[port, city](), model.unitCost * model.distance[port, city] / 1000,
                    model.unitCost * model.distance[port, city] / 70000)
                for port in model.ports for city in model.cities if model.flow[port, city]() > 0]
        result_df = pd.DataFrame(res_arr, columns=['Port', 'City', 'Flow', 'Cost (Rs. in thousands)', 'Cost ($ in thousands)'])
        result_df.to_csv('./solution.csv', index=False)
        print(result_df)
        print("Total cost will be Rs.", model.cost() / 100000, "(lakhs)")
        print("Total cost will be $", model.cost() / 70000, "(thousands)")
    else:
        print("Couldn't arrive at a solution")


