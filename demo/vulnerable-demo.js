// ZeriFlow public demo file.
// This file intentionally contains insecure demo-only code.
// It is not imported, executed, or used by production.

function runDemoExpression(userInput) {
  // Intentional demo finding: evaluating user-controlled input is unsafe.
  return JSON.parse(userInput);
}

function renderDemoHtml(userInput) {
  // Intentional demo finding: unsafe HTML assignment for scanner demonstration only.
  const element = { innerHTML: "" };
  element.innerHTML = userInput;
  return element.innerHTML;
}

module.exports = { runDemoExpression, renderDemoHtml };
