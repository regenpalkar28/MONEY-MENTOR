import Box from "@mui/material/Box";
import {Link} from "react-router-dom";
import Button from "@mui/material/Button";
import { useParams } from "react-router-dom";
import LoanSteps from "./LoanSteps";

function SeparateLoanPage() {
  const { loanType } = useParams();

  const loanInfo = {
    home: {
      title: " 🏠  HOME LOAN ",
      content:
        " A home loan is a long‑term loan provided by banks to help individuals buy, build, or renovate a house. The loan is repaid in monthly installments over several years. ",
      contentHeading: " ⦿ HOW A HOME LOAN WORKS ",
      steps: [
        "CHOOSE PROPERTY AND LOAN AMOUNT",
        "CHECK ELIGIBILITY",
        "SUBMIT APPLICATION AND DOCUMENTS",
        "BANK VERIFICATION",
        "LOAN APPROVAL",
        "DISBURSEMENT",
      ],
      sections: [
        {
          title: "🧠 Is a Home Loan Right for You?",
          body: [
            "A home loan is ideal if you have stable income",
            "Credit score should be 750+",
            "EMI should not exceed 40–50% of income",
            "You should be ready for a 15–30 year commitment",
          ],
        },
        {
          title: "💡 Tips Before Applying",
          body: [
            "Check your credit score (750+)",
            "Calculate total costs (down payment + charges)",
            "Compare lenders",
            "Keep documents ready",
            "Choose tenure wisely",
            "Maintain an emergency fund",
          ],
        },
        {
          title: "⚠️ Common Mistakes",
          body: [
            "Borrowing too much",
            "Ignoring hidden costs",
            "Not comparing offers",
            "Poor credit preparation",
            "Skipping property research",
          ],
        },
      ],
    },

    education: {
      title: " 📚  EDUCATION LOAN",
      content:
        " An education loan is provided by banks to help students finance their higher studies in India or abroad. It covers tuition fees, living expenses, books, and other education-related costs. The loan is usually repaid after completion of studies.",
      contentHeading: " ⦿ HOW AN EDUCATION LOAN WORKS ",
      steps: [
        "CHOOSE COURSE AND INSTITUTE",
        "ESTIMATE TOTAL EDUCATION COST",
        "CHECK ELIGIBILITY",
        "SUBMIT APPLICATION AND DOCUMENTS",
        "LOAN SANCTION",
        "DISBURSEMENT AS PER COURSE REQUIREMENT",
      ],
      sections: [
        {
          title: "🧠 Is an Education Loan Right for You?",
          body: [
            "Ideal if higher studies are essential for your career growth",
            "Useful when savings are insufficient for tuition and living costs",
            "Best for recognized universities in India or abroad",
            "Parents/guardians usually act as co-borrowers",
          ],
        },
        {
          title: "💡 Tips Before Applying",
          body: [
            "Choose an approved university or institute",
            "Estimate full cost including living expenses",
            "Check interest subsidy schemes",
            "Understand moratorium period clearly",
            "Compare banks and NBFCs",
          ],
        },
        {
          title: "⚠️ Common Mistakes",
          body: [
            "Not checking course eligibility",
            "Ignoring repayment burden after graduation",
            "Overlooking currency risk for foreign studies",
            "Not reading moratorium terms properly",
          ],
        },
      ],
    },

    personal: {
      title: " 👤  PERSONAL LOAN",
      content:
        " A personal loan is an unsecured loan offered by banks to meet personal financial needs such as medical expenses, travel, or emergencies. It does not require any collateral and is repaid through fixed monthly installments. ",
      contentHeading: " ⦿ HOW A PERSONAL LOAN WORKS ",
      steps: [
        "DETERMINE LOAN REQUIREMENT",
        "CHECK ELIGIBILITY AND CREDIT SCORE",
        "APPLY FOR THE LOAN",
        "DOCUMENT VERIFICATION",
        "LOAN APPROVAL",
        "AMOUNT CREDITED TO ACCOUNT",
      ],
      sections: [
        {
          title: "🧠 Is a Personal Loan Right for You?",
          body: [
            "Suitable for emergencies or short-term needs",
            "No collateral required",
            "Fast approval if income and credit score are good",
            "Best when you need flexibility",
          ],
        },
        {
          title: "💡 Tips Before Applying",
          body: [
            "Check your credit score before applying",
            "Borrow only what you actually need",
            "Compare interest rates and processing fees",
            "Choose shortest affordable tenure",
          ],
        },
        {
          title: "⚠️ Common Mistakes",
          body: [
            "Using personal loan for long-term expenses",
            "Ignoring high interest rates",
            "Applying to multiple banks at once",
            "Missing EMI payments",
          ],
        },
      ],
    },

    car: {
      title: " 🚘  CAR LOAN",
      content:
        " A car loan is offered by banks to help individuals purchase a new or used vehicle. The vehicle itself acts as collateral, and the loan is repaid in monthly installments over a fixed tenure. ",
      contentHeading: " ⦿ HOW A CAR LOAN WORKS ",
      steps: [
        "SELECT VEHICLE",
        "CHECK LOAN ELIGIBILITY",
        "APPLY FOR CAR LOAN",
        "DOCUMENT AND VEHICLE VERIFICATION",
        "LOAN APPROVAL",
        "PAYMENT TO DEALER",
      ],
      sections: [
        {
          title: "🧠 Is a Car Loan Right for You?",
          body: [
            "Ideal if you need a vehicle for daily use",
            "Best when you can pay a decent down payment",
            "Loan is secured by the car itself",
            "Suitable for salaried and self-employed individuals",
          ],
        },
        {
          title: "💡 Tips Before Applying",
          body: [
            "Compare dealership and bank offers",
            "Check interest rate for new vs used cars",
            "Pay higher down payment to reduce EMI",
            "Review foreclosure and prepayment charges",
          ],
        },
        {
          title: "⚠️ Common Mistakes",
          body: [
            "Choosing longer tenure unnecessarily",
            "Ignoring insurance and maintenance costs",
            "Not checking resale value impact",
            "Overstretching monthly budget",
          ],
        },
      ],
    },

    gold: {
      title: " 🌟  GOLD LOAN",
      content:
        " A gold loan is a secured loan where borrowers pledge their gold jewelry as collateral to get instant funds. It offers quick processing and flexible repayment options. ",
      contentHeading: " ⦿ HOW A GOLD LOAN WORKS ",
      steps: [
        "SUBMIT GOLD ORNAMENTS",
        "GOLD VALUATION",
        "LOAN AMOUNT FINALIZATION",
        "DOCUMENT VERIFICATION",
        "LOAN APPROVAL",
        "CASH OR BANK TRANSFER",
      ],
      sections: [
        {
          title: "🧠 Is a Gold Loan Right for You?",
          body: [
            "Good option for short-term financial needs",
            "Ideal when you own idle gold jewellery",
            "Faster approval compared to other loans",
            "Lower interest than personal loans",
          ],
        },
        {
          title: "💡 Tips Before Applying",
          body: [
            "Compare gold valuation methods",
            "Understand repayment flexibility",
            "Check loan-to-value ratio",
            "Ensure safe storage and insurance of gold",
          ],
        },
        {
          title: "⚠️ Common Mistakes",
          body: [
            "Borrowing without repayment plan",
            "Ignoring auction rules on default",
            "Not checking purity evaluation",
            "Taking longer tenure unnecessarily",
          ],
        },
      ],
    },
  };

  const loan = loanInfo[loanType];

  if (!loan) {
    return <p>Loan not found</p>;
  }

  return (
    <Box sx={{pt:'80px'}}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "40px 90px 30px 70px",
        }}
      >
        <h1 className="loan-page-h1">{loan.title}</h1>
        <Box sx={{ display: "flex", flexDirection: "row", gap: 6 }}>
          <Button
            component={Link}
            to="/loan/eligibility"
            variant="contained"
            sx={{
              backgroundColor: "#5B122D",
              color: "#F4E1C6",
              height: "50px",
              width: "140px",
              display: "flex",
              justifyContent: "center",
              fontSize: "17px",
              fontWeight: "500",
              borderRadius: "7%",
            }}
          >
            Eligibility
          </Button>
          <Button
          component={Link}
            to="/loan/documents"
            variant="contained"
            sx={{
              backgroundColor: "#5B122D",
              color: "#F4E1C6",
              height: "50px",
              width: "140px",
              display: "flex",
              justifyContent: "center",
              fontSize: "17px",
              fontWeight: "500",
              borderRadius: "7%",
            }}
          >
            Documents
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          backgroundColor: "#5B122D",
          color: "#F4E1C6",
          padding: "40px 70px 40px 70px",
          height: "150px",
          display: " flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "22px",
          fontFamily: "sans-serif",
        }}
      >
        {loan.content}
      </Box>
      <Box sx={{ color: "#5B122D", padding: "40px 40px 40px 40px" }}>
        <h3 className="loan-page-h3">{loan.contentHeading}</h3>
        <LoanSteps steps={loan.steps} />
      </Box>
      <Box sx={{color: "#5B122D", 
        padding: "40px 70px 40px 70px",
        fontSize: "20px",
        display: "flex", 
        flexDirection: "row",
        gap: "2",
      }}>
       {loan.sections.map((section, index)=>(
        <Box key={index}>
            <h2>{section.title}</h2>
            <ul>
                {section.body.map((point, i)=>(
                    <li key={i}>{point}</li> 
                ))}
            </ul>
        </Box>
       ))} 
      </Box>
    </Box>
  );
}

export default SeparateLoanPage;
