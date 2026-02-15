import {Link} from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

function DocumentsAccount() {
  const documentsData = {
    savings: [
      { criteria: "IDENTITY PROOF", value: "PAN card, Aadhaar, Passport, Voter ID, Driving License" },
      { criteria: "ADDRESS PROOF", value: "Aadhaar, Passport, Utility bills, Rental agreement, Voter ID" },
      {
        criteria: "PAN CARD",
        value: "Mandatory",
      },
      { criteria: "PHOTOGRAPHS", value: "2-4 passport-size photos" },
      {
        criteria: "BUSINESS DOCUMENTS",
        value: "Not required",
      },
      { criteria: "INCOME PROOF", value: "Not required" },
      { criteria: "EMPLOYER LETTER", value: "Not required" },
      { criteria: "INITIAL DEPOSIT", value: "Minimum balance (varies by bank)" },
      {
        criteria: "EXISTING ACCOUNT PROOF",
        value: "Not required",
      },
      {
        criteria: "FORM 60/61",
        value: "If PAN not available (low-value accounts)",
      },
      { criteria: "CANCELLED CHEQUE", value: "Not required initially" },
      {
        criteria: "NOMINEE DETAILS",
        value:
          "Optional but recommended",
      },
    ],

    current: [
      { criteria: "IDENTITY PROOF", value: "PAN card, Aadhaar, Passport, Voter ID, Driving License" },
      { criteria: "ADDRESS PROOF", value: "Aadhaar, Passport, Utility bills, Rental agreement" },
      {
        criteria: "PAN CARD",
        value: "Mandatory",
      },
      { criteria: "PHOTOGRAPHS", value: "2-4 passport-size photos" },
      {
        criteria: "BUSINESS DOCUMENTS",
        value: "Business registration, GST certificate, Partnership deed/MOA, Business PAN",
      },
      { criteria: "INCOME PROOF", value: "Not required" },
      { criteria: "EMPLOYER LETTER", value: "Not required" },
      { criteria: "INITIAL DEPOSIT", value: "Higher minimum balance" },
      {
        criteria: "EXISTING ACCOUNT PROOF",
        value: "May need existing account details",
      },
      {
        criteria: "FORM 60/61",
        value: "If PAN not available",
      },
      { criteria: "CANCELLED CHEQUE", value: "May be required" },
      {
        criteria: "NOMINEE DETAILS",
        value:
          "Optional but recommended",
      },
    ],

    fixed: [
      { criteria: "IDENTITY PROOF", value: "PAN card, Aadhaar, Passport, Voter ID" },
      { criteria: "ADDRESS PROOF", value: "Aadhaar, Passport, Utility bills" },
      {
        criteria: "PAN CARD",
        value: "Mandatory (for interest >₹40,000/year)",
      },
      { criteria: "PHOTOGRAPHS", value: "1-2 passport-size photos" },
      {
        criteria: "BUSINESS DOCUMENTS",
        value: "Not required",
      },
      { criteria: "INCOME PROOF", value: "Not required" },
      { criteria: "EMPLOYER LETTER", value: "Not required" },
      { criteria: "INITIAL DEPOSIT", value: "FD amount" },
      {
        criteria: "EXISTING ACCOUNT PROOF",
        value: "Savings/Current account (if opening linked FD)",
      },
      {
        criteria: "FORM 60/61",
        value: "If PAN not available",
      },
      { criteria: "CANCELLED CHEQUE", value: "Not required" },
      {
        criteria: "NOMINEE DETAILS",
        value:
          "Optional but recommended",
      },
    ],

    recurring: [
      { criteria: "IDENTITY PROOF", value: "PAN card, Aadhaar, Passport, Voter ID" },
      { criteria: "ADDRESS PROOF", value: "Aadhaar, Passport, Utility bills" },
      {
        criteria: "PAN CARD",
        value: "Mandatory (if interest taxable)",
      },
      { criteria: "PHOTOGRAPHS", value: "1-2 passport-size photos" },
      {
        criteria: "BUSINESS DOCUMENTS",
        value: "Not required",
      },
      { criteria: "INCOME PROOF", value: "Not required" },
      { criteria: "EMPLOYER LETTER", value: "Not required" },
      { criteria: "INITIAL DEPOSIT", value: "First installment amount" },
      {
        criteria: "EXISTING ACCOUNT PROOF",
        value: "Savings account (linked for auto-debit)",
      },
      {
        criteria: "FORM 60/61",
        value: "If PAN not available",
      },
      { criteria: "CANCELLED CHEQUE", value: "Not required" },
      {
        criteria: "NOMINEE DETAILS",
        value:
          "Optional but recommended",
      },
    ],

    salary: [
      { criteria: "IDENTITY PROOF", value: "PAN card, Aadhaar, Passport, Voter ID" },
      { criteria: "ADDRESS PROOF", value: "Aadhaar, Passport, Utility bills" },
      {
        criteria: "PAN CARD",
        value: "Mandatory",
      },
      { criteria: "PHOTOGRAPHS", value: "2-4 passport-size photos" },
      {
        criteria: "BUSINESS DOCUMENTS",
        value: "Not required",
      },
      { criteria: "INCOME PROOF", value: "Salary slip, Employment letter" },
      { criteria: "EMPLOYER LETTER", value: "Salary certificate from employer" },
      { criteria: "INITIAL DEPOSIT", value: "Usually zero or minimal" },
      {
        criteria: "EXISTING ACCOUNT PROOF",
        value: "Not required",
      },
      {
        criteria: "FORM 60/61",
        value: "Usually not applicable",
      },
      { criteria: "CANCELLED CHEQUE", value: "Not required initially" },
      {
        criteria: "NOMINEE DETAILS",
        value:
          "Optional but recommended",
      },
    ],
  };

  const criteriaList = documentsData.savings.map((item, index) => ({
    criteria: item.criteria,
    savings: documentsData.savings[index]?.value || "-",
    current: documentsData.current[index]?.value || "-",
    fixed: documentsData.fixed[index]?.value || "-",
    recurring: documentsData.recurring[index]?.value || "-",
    salary: documentsData.salary[index]?.value || "-",
  }));

  return (
    <Box sx={{pt:'120px'}}>
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
        <h1 style={{ fontSize: "50px" }}>~ CHECK REQUIRED DOCUMENTS ~</h1>
        <p style={{ fontSize: "20px", marginTop: "0" }}>
          See document requirements for different accounts types in one
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
              <TableCell>DOCUMENT TYPE</TableCell>
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
        <h2>Want to open an Account?</h2>
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

export default DocumentsAccount;
