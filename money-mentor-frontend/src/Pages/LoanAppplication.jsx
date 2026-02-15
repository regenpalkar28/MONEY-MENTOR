import { useState } from "react";

function LoanApplication() {
  const [loanType, setLoanType] = useState("");
  const [status, setStatus] = useState(""); // Approved / Rejected

  const [form, setForm] = useState({
    age: "",
    employmentType: "",
    income: "",
    creditScore: "",
    loanAmount: "",
    propertyValue: "",
    vehiclePrice: ""
  });

  const [documents, setDocuments] = useState({
    incomeProof: false,
    identityProof: false,
    propertyDocs: false,
    vehicleQuote: false
  });

  /* ---------------- LOAN CRITERIA ---------------- */

  const loanCriteria = {
    home: {
      minAge: 21,
      minIncome: 40000,
      minCreditScore: 700,
      requiredDocs: ["incomeProof", "identityProof", "propertyDocs"]
    },
    car: {
      minAge: 18,
      minIncome: 25000,
      minCreditScore: 650,
      requiredDocs: ["incomeProof", "identityProof", "vehicleQuote"]
    },
    personal: {
      minAge: 21,
      minIncome: 30000,
      minCreditScore: 650,
      requiredDocs: ["incomeProof", "identityProof"]
    }
  };

  /* ---------------- FIELD MAP ---------------- */

  const fieldMap = {
    age: ["home", "car", "personal"],
    employmentType: ["home", "car", "personal"],
    income: ["home", "car", "personal"],
    creditScore: ["home", "car", "personal"],
    loanAmount: ["home", "car", "personal"],
    propertyValue: ["home"],
    vehiclePrice: ["car"]
  };

  const isFieldActive = (field) =>
    !loanType || fieldMap[field].includes(loanType);

  /* ---------------- HANDLERS ---------------- */

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleDocumentChange = (doc) => {
    setDocuments({ ...documents, [doc]: !documents[doc] });
  };

  /* ---------------- ELIGIBILITY CHECK ---------------- */

  const checkEligibility = () => {
    const criteria = loanCriteria[loanType];

    if (form.age < criteria.minAge) return false;
    if (form.income < criteria.minIncome) return false;
    if (form.creditScore < criteria.minCreditScore) return false;

    for (let doc of criteria.requiredDocs) {
      if (!documents[doc]) return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!loanType) {
      setStatus("Please select a loan type");
      return;
    }

    const eligible = checkEligibility();

    if (eligible) {
      setStatus("✅ Loan Approved");
    } else {
      setStatus("❌ Loan Rejected (Criteria not met)");
    }
  };

  /* ---------------- UI ---------------- */

  return (
    <div style={{ maxWidth: "500px", margin: "auto" }}>
      <h2>Apply for Loan</h2>

      {/* LOAN TYPE BUTTONS */}
      <div style={{ display: "flex", gap: "8px", marginBottom: "20px" }}>
        {["home", "car", "personal"].map(type => (
          <button
            key={type}
            onClick={() => {
              setLoanType(type);
              setStatus("");
            }}
            style={{
              background: loanType === type ? "#1976d2" : "#eee",
              color: loanType === type ? "#fff" : "#000"
            }}
            type="button"
          >
            {type.toUpperCase()} LOAN
          </button>
        ))}
      </div>

      <form onSubmit={handleSubmit}>

        {/* AGE */}
        <div style={{ opacity: isFieldActive("age") ? 1 : 0.4 }}>
          <input
            type="number"
            name="age"
            placeholder="Age"
            onChange={handleChange}
            disabled={!isFieldActive("age")}
          />
        </div>

        {/* EMPLOYMENT TYPE */}
        <div style={{ opacity: isFieldActive("employmentType") ? 1 : 0.4 }}>
          <input
            type="text"
            name="employmentType"
            placeholder="Employment Type (Salaried / Self)"
            onChange={handleChange}
            disabled={!isFieldActive("employmentType")}
          />
        </div>

        {/* INCOME */}
        <div style={{ opacity: isFieldActive("income") ? 1 : 0.4 }}>
          <input
            type="number"
            name="income"
            placeholder="Monthly Income"
            onChange={handleChange}
            disabled={!isFieldActive("income")}
          />
        </div>

        {/* CREDIT SCORE */}
        <div style={{ opacity: isFieldActive("creditScore") ? 1 : 0.4 }}>
          <input
            type="number"
            name="creditScore"
            placeholder="Credit Score"
            onChange={handleChange}
            disabled={!isFieldActive("creditScore")}
          />
        </div>

        {/* PROPERTY VALUE */}
        <div style={{ opacity: isFieldActive("propertyValue") ? 1 : 0.4 }}>
          <input
            type="number"
            name="propertyValue"
            placeholder="Property Value"
            onChange={handleChange}
            disabled={!isFieldActive("propertyValue")}
          />
        </div>

        {/* VEHICLE PRICE */}
        <div style={{ opacity: isFieldActive("vehiclePrice") ? 1 : 0.4 }}>
          <input
            type="number"
            name="vehiclePrice"
            placeholder="Vehicle Price"
            onChange={handleChange}
            disabled={!isFieldActive("vehiclePrice")}
          />
        </div>

        {/* DOCUMENT SUBMISSION */}
        {loanType && (
          <>
            <h4>Documents</h4>

            {loanCriteria[loanType].requiredDocs.map(doc => (
              <label key={doc} style={{ display: "block" }}>
                <input
                  type="checkbox"
                  checked={documents[doc]}
                  onChange={() => handleDocumentChange(doc)}
                />
                {doc}
              </label>
            ))}
          </>
        )}

        <button type="submit" style={{ marginTop: "15px" }}>
          Apply
        </button>
      </form>

      {status && <h3>{status}</h3>}
    </div>
  );
}

export default LoanApplication;
