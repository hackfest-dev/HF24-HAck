from flask import Flask, request, jsonify
import csv
from geopy.distance import geodesic
from math import ceil

app = Flask(__name__)

def calculate_distance(port, city):
    return ceil(geodesic(port['position'], city['position']).kilometers)

@app.route('/')
def hello():
    return 'Server is up and running!'

@app.route('/save_data', methods=['POST'])
def save_data():
    try:
        data = request.json
        if 'Ports' in data and 'Cities' in data:
            ports = data['Ports']
            cities = data['Cities']
            with open('port.csv', 'w', newline='') as portfile:
                port_writer = csv.writer(portfile)
                port_writer.writerow(['Name', 'Position', 'Supply'])
                for port in ports:
                    if 'supply' not in port:
                        return jsonify({"error": "Supply value missing for some ports"}), 400
                    port_writer.writerow([port['name'], port['position'], port['supply']])
            with open('city.csv', 'w', newline='') as cityfile:
                city_writer = csv.writer(cityfile)
                city_writer.writerow(['Name', 'Position', 'Demand'])
                for city in cities:
                    if 'demand' not in city:
                        return jsonify({"error": "Demand value missing for some cities"}), 400
                    city_writer.writerow([city['name'], city['position'], city['demand']])
            with open('distance.csv', 'w', newline='') as distancefile:
                distance_writer = csv.writer(distancefile)
                # Write header row
                header_row = [''] + [city['name'] for city in cities]
                distance_writer.writerow(header_row)
                # Calculate and write distances for each port
                for port in ports:
                    row = [port['name']]
                    for city in cities:
                        distance = calculate_distance(port, city)
                        row.append(distance)
                    distance_writer.writerow(row)

            return jsonify({"message": "Data received and saved successfully"}), 200
        else:
            return jsonify({"error": "Missing 'Ports' or 'Cities' key in JSON data"}), 400
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
