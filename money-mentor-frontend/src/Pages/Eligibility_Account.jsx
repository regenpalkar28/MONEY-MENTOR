import {Link} from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

function EligibilityAccount() {
  const eligibilityData = {
    savings: [
      { criteria: "MINIMUM AGE", value: "18 years (10 years for minor accounts with guardian)" },
      { criteria: "MAXIMUM AGE", value: "No upper limit" },
      {
        criteria: "NATIONALITY",
        value: "Indian resident, NRI, or Foreign national (with restrictions)",
      },
      { criteria: "RESIDENCY STATUS", value: "Resident/NRI accounts available" },
      {
        criteria: "EMPLOYMENT STATUS",
        value: "Any (employed, self-employed, unemployed, student)",
      },
      { criteria: "EMPLOYER TIE-UP", value: "Not required" },
      { criteria: "BUSINESS REQUIREMENTS", value: "Not required (individual account)" },
      { criteria: "MINIMUM INCOME", value: "No minimum income required" },
      {
        criteria: "CREDIT SCORE",
        value: "Not required",
      },
      {
        criteria: "MINIMUM DEPOSIT",
        value: "₹500-₹10,000 (varies by bank and account type)",
      },
      { criteria: "KYC COMPLIANCE", value: "Mandatory" },
      {
        criteria: "EXISTING ACCOUNT",
        value:
          "Not required",
      },
      {
        criteria: "BUSINESS REGISTRATION", 
        value: "Not applicable",
      },
      {
        criteria: "MULTIPLE ACCOUNTS",
        value: "Can have multiple savings accounts",
      },
      {
        criteria: "GEOGRAPHIC RESTRICTION",
        value: "None (can open anywhere in India)",
      },
    ],

    current: [
      { criteria: "MINIMUM AGE", value: "18 years (business entity age varies)" },
      { criteria: "MAXIMUM AGE", value: "No upper limit" },
      {
        criteria: "NATIONALITY",
        value: "Indian resident, NRI, or registered business entity",
      },
      { criteria: "RESIDENCY STATUS", value: "Resident/NRI accounts available" },
      {
        criteria: "EMPLOYMENT STATUS",
        value: "Any (primarily for business owners, professionals, traders)",
      },
      { criteria: "EMPLOYER TIE-UP", value: "Not required" },
      { criteria: "BUSINESS REQUIREMENTS", value: "Must have business/professional activity" },
      { criteria: "MINIMUM INCOME", value: "No minimum income (business turnover may matter)" },
      {
        criteria: "CREDIT SCORE",
        value: "Not required",
      },
      {
        criteria: "MINIMUM DEPOSIT",
        value: "₹5,000-₹25,000 (varies by bank)",
      },
      { criteria: "KYC COMPLIANCE", value: "Mandatory" },
      {
        criteria: "EXISTING ACCOUNT",
        value:
          "Not required",
      },
      {
        criteria: "BUSINESS REGISTRATION", 
        value: "Required (proprietorship, partnership, company, LLP)",
      },
      {
        criteria: "MULTIPLE ACCOUNTS",
        value: "Can have multiple current accounts",
      },
      {
        criteria: "GEOGRAPHIC RESTRICTION",
        value: "None (registered office address needed)",
      },
    ],

    fixed: [
      { criteria: "MINIMUM AGE", value: "18 years (minors allowed with guardian)" },
      { criteria: "MAXIMUM AGE", value: "No upper limit" },
      {
        criteria: "NATIONALITY",
        value: "Indian resident, NRI",
      },
      { criteria: "RESIDENCY STATUS", value: "Resident/NRI FDs available" },
      {
        criteria: "EMPLOYMENT STATUS",
        value: "Any",
      },
      { criteria: "EMPLOYER TIE-UP", value: "Not required" },
      { criteria: "BUSINESS REQUIREMENTS", value: "Not required" },
      { criteria: "MINIMUM INCOME", value: "No minimum income" },
      {
        criteria: "CREDIT SCORE",
        value: "Not required",
      },
      {
        criteria: "MINIMUM DEPOSIT",
        value: "₹1,000-₹10,000 (varies by bank and tenure)",
      },
      { criteria: "KYC COMPLIANCE", value: "Mandatory" },
      {
        criteria: "EXISTING ACCOUNT",
        value:
          "May require savings/current account with same bank",
      },
      {
        criteria: "BUSINESS REGISTRATION", 
        value: "Not applicable",
      },
      {
        criteria: "MULTIPLE ACCOUNTS",
        value: "Can open multiple FDs",
      },
      {
        criteria: "GEOGRAPHIC RESTRICTION",
        value: "None",
      },
    ],

    recurring: [
      { criteria: "MINIMUM AGE", value: "18 years (minors allowed with guardian)" },
      { criteria: "MAXIMUM AGE", value: "No upper limit" },
      {
        criteria: "NATIONALITY",
        value: "Indian resident, NRI",
      },
      { criteria: "RESIDENCY STATUS", value: "Resident/NRI RDs available" },
      {
        criteria: "EMPLOYMENT STATUS",
        value: "Any",
      },
      { criteria: "EMPLOYER TIE-UP", value: "Not required" },
      { criteria: "BUSINESS REQUIREMENTS", value: "Not required" },
      { criteria: "MINIMUM INCOME", value: "No minimum income" },
      {
        criteria: "CREDIT SCORE",
        value: "Not required",
      },
      {
        criteria: "MINIMUM DEPOSIT",
        value: "₹100-₹1,000 per month (varies)",
      },
      { criteria: "KYC COMPLIANCE", value: "Mandatory" },
      {
        criteria: "EXISTING ACCOUNT",
        value:
          "Requires savings account with same bank",
      },
      {
        criteria: "BUSINESS REGISTRATION", 
        value: "Not applicable",
      },
      {
        criteria: "MULTIPLE ACCOUNTS",
        value: "Can open multiple RDs",
      },
      {
        criteria: "GEOGRAPHIC RESTRICTION",
        value: "None",
      },
    ],

    salary: [
      { criteria: "MINIMUM AGE", value: "18 years" },
      { criteria: "MAXIMUM AGE", value: "Usually up to retirement age (60-65 years)" },
      {
        criteria: "NATIONALITY",
        value: "Indian resident",
      },
      { criteria: "RESIDENCY STATUS", value: "Must be resident Indian" },
      {
        criteria: "EMPLOYMENT STATUS",
        value: "Must be salaried employee",
      },
      { criteria: "EMPLOYER TIE-UP", value: "Employer must have tie-up with bank" },
      { criteria: "BUSINESS REQUIREMENTS", value: "Not required" },
      { criteria: "MINIMUM INCOME", value: "Varies by bank (typically ₹10,000-25,000/month)" },
      {
        criteria: "CREDIT SCORE",
        value: "Not required",
      },
      {
        criteria: "MINIMUM DEPOSIT",
        value: "Usually nil or very low",
      },
      { criteria: "KYC COMPLIANCE", value: "Mandatory" },
      {
        criteria: "EXISTING ACCOUNT",
        value:
          "Not required (bank opens it)",
      },
      {
        criteria: "BUSINESS REGISTRATION", 
        value: "Not applicable",
      },
      {
        criteria: "MULTIPLE ACCOUNTS",
        value: "One per employer typically",
      },
      {
        criteria: "GEOGRAPHIC RESTRICTION",
        value: "Must be in employer's service area",
      },
    ],
  };

  const criteriaList = eligibilityData.savings.map((item, index) => ({
    criteria: item.criteria,
    savings: eligibilityData.savings[index]?.value || "-",
    current: eligibilityData.current[index]?.value || "-",
    fixed: eligibilityData.fixed[index]?.value || "-",
    recurring: eligibilityData.recurring[index]?.value || "-",
    salary: eligibilityData.salary[index]?.value || "-",
  }));

  return (
    <Box>
      <Box
        sx={{
          padding: "40px 70px 40px 70px",
          fontSize: "25px",
          fontFamily: "serif",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "#5B122D",
          fontWeight: "500",
        }}
      >
        <h1 style={{ fontSize: "50px" }}>~ CHECK YOUR ACCOUNT ELIGIBILITY ~</h1>
        <p style={{ fontSize: "20px", marginTop: "0" }}>
          See basic eligibility requirements for different account types in one
          place.
        </p>
      </Box>
      <Box
        sx={{
          padding: "10px 70px 40px 80px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Table
          sx={{
            borderCollapse: "collapse",
            borderSpacing: "0 8px",
            "& th, & td": {
              border: "1.5px solid #5B122D",
              textAlign: "center",
              verticalAlign: "middle",
              fontFamily: "sans-serif",
              padding: "8px",
              lineHeight: "3.5",
              fontSize: "15px",
              transition: "all 0.25s ease",
            },
            "& thead th": {
              fontSize: "18px",
              fontWeight: "700",
              backgroundColor: "#F4E1C6",
              color: "#5B122D",
              position: "relative",
              zIndex: 1,
            },
            "& th:first-of-type, & td:first-of-type": {
              fontSize: "18px",
              fontWeight: "700",
              backgroundColor: "#F6E4C8",
              color: "#5B122D",
              position: "relative",
              zIndex: 1,
            },
            "& tbody tr:hover td": {
              backgroundColor: "#F2D9C4",
              transform: "translateY(-2px)",
            },
            "& tbody tr:hover td:first-of-type": {
              backgroundColor: "#F2D9C4",
            },
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell
                colSpan={6}
                align="center"
                sx={{
                  lineHeight: "1.4 !important",
                  backgroundColor: "#5B122D !important",
                  color: "#F4E1C6 !important",
                }}
              >
                💡 Tip: Requirements vary by bank. Use this as a general guide.
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>CRITERIA</TableCell>
              <TableCell>SAVINGS ACCOUNT</TableCell>
              <TableCell>CURRENT ACCOUNT</TableCell>
              <TableCell>FIXED DEPOSIT</TableCell>
              <TableCell>RECURRING DEPOSIT</TableCell>
              <TableCell>SALARY ACCOUNT</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {criteriaList.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.criteria}</TableCell>
                <TableCell>{row.savings}</TableCell>
                <TableCell>{row.current}</TableCell>
                <TableCell>{row.fixed}</TableCell>
                <TableCell>{row.recurring}</TableCell>
                <TableCell>{row.salary}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#5B122D",
          fontSize: "17px",
          padding: "40px 0 7px 0",
          fontFamily: "sans-serif",
        }}
      >
        <h2>Want to open an account?</h2>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: "15px",
          color: "#5B122D",
          fontSize: "20px",
          fontFamily: "sans-serif",
          padding: "0 0 100px 0",
        }}
      >
        <p> 👉 Try our</p>
        <Button component={Link} to="/loanpage"
          sx={{
            backgroundColor: "#5B122D",
            color: "#F4E1C6",
            height: "50px",
            width: "170px",
            borderRadius: "40px",
            "&:hover":{
                backgroundColor: "#7A1A3F"
            }
          }}
        >
          LOAN CALCULATOR
        </Button>
      </Box>
    </Box>
  );
}

export default EligibilityAccount;
