
const beforeSize = 254.86;

// Replace this value after measuring the optimized build.
const afterSize = 257.54;
function PerformanceReport() {
  const reduction =
    afterSize !== null
      ? (((beforeSize - afterSize) / beforeSize) * 100).toFixed(2)
      : null;

  return (
    <section className="hero">
      <p className="eyebrow">PERFORMANCE REPORT</p>
      <h1>Bundle Size Optimization</h1>
      <p className="intro">
        This report compares the JavaScript bundle size before
        and after route-based code splitting.
      </p>

      <div className="performance-report">
        <p>
          <strong>Before optimization:</strong> {beforeSize} KB
        </p>

        <p>
          <strong>After optimization:</strong>{" "}
          {afterSize === null ? "Pending measurement" : `${afterSize} KB`}
        </p>

        <p>
          <strong>Size reduction:</strong>{" "}
          {reduction === null ? "Pending measurement" : `${reduction}%`}
        </p>
      </div>
    </section>
  );
}

export default PerformanceReport;
