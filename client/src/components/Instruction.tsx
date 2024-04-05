import { useEffect ,forwardRef, ForwardRefRenderFunction} from 'react';
import mermaid from 'mermaid';

const Instruction: ForwardRefRenderFunction<HTMLDivElement> = (_, ref) => {
  useEffect(() => {
    mermaid.initialize({
      theme: 'default', // You can set your preferred theme here
    });
  }, []);

  const graphDefinition = `
    graph LR;
      UploadData-->OptiLog;
      OptiLog-->GenerateRecommendations;
      GenerateRecommendations-->ActionableInsights;
      ActionableInsights-->Success;
  `;

  return (
    <div className="max-w-4xl mx-auto p-8 border border-white  rounded-lg my-16" ref={ref}>
      <h2 className="text-2xl font-bold mb-4">How It Works</h2>
      <p className="mb-6">
        Simply upload your existing data on ports, cities, distances, and
        supply/demand metrics, and let OptiLog do the rest. Our advanced
        algorithms will analyze your data, optimize freight flow, and generate
        actionable recommendations tailored to your specific needs.
      </p>
      <h2 className="text-2xl font-bold mb-4">Get Started Today</h2>
      <p>
        Experience the power of logistics optimization with OptiLog. Whether
        you're a small business or a large enterprise, our solution is designed
        to meet your logistics challenges head-on and drive success in today's
        competitive marketplace.
      </p>

      <div className="max-w-4xl mx-auto mt-8 p-8 border rounded-lg shadow-lg">
        <div className="mermaid">{graphDefinition}</div>
      </div>
    </div>
  );
};

export default forwardRef(Instruction);
