import Box from "@mui/material/Box";
import {Link} from "react-router-dom";
import Button from "@mui/material/Button";
import { useParams } from "react-router-dom";
import LoanSteps from "../LoanPage/LoanSteps";

function SeparateAccountPage() {
  const { accountType } = useParams();

  const accountInfo = {
    savings: {
      title: " 💰 SAVINGS ACCOUNT ",
      content:
        " A savings account is a deposit account held at a bank that allows you to store money safely while earning interest on your balance. It provides easy access to funds for everyday transactions and emergencies. ",
      contentHeading: " ⦿ HOW A SAVINGS ACCOUNT WORKS ",
      steps: [
        "CHOOSE ACCOUNT TYPE",
        "SUBMIT APPLICATION",
        "COMPLETE KYC VERIFICATION",
        "INITIAL DEPOSIT",
        "ACCOUNT ACTIVATION",
        "RECEIVE ACCOUNT DETAILS",
      ],
      sections: [
        {
          title: "🧠 Is a Savings Account Right for You?",
          body: [
            "Ideal for building an emergency fund",
            "Perfect for those who want to earn interest on idle money",
            "Suitable for individuals who need regular access to their funds",
            "Great for salaried and non-salaried individuals alike",
            "Best for maintaining liquidity while saving",
          ],
        },
        {
          title: "💡 Tips Before Applying",
          body: [
            "Compare interest rates across different banks",
            "Check minimum balance requirements to avoid penalties",
            "Look for accounts with free ATM withdrawals",
            "Review digital banking features and mobile app quality",
            "Consider banks with wide branch and ATM networks",
          ],
        },
        {
          title: "⚠️ Common Mistakes",
          body: [
            "Not maintaining the minimum balance and paying penalties",
            "Ignoring monthly account statements",
            "Choosing accounts with low interest rates",
            "Overlooking hidden charges and fees",
            "Making too many withdrawals beyond free limits",
          ],
        },
      ],
    },

    current: {
      title: " 💸 CURRENT ACCOUNT",
      content:
        " A current account is a non-interest bearing deposit account designed for businesses and individuals who need to conduct frequent transactions without any limit on deposits or withdrawals.",
      contentHeading: " ⦿ HOW A CURRENT ACCOUNT WORKS ",
      steps: [
        "ASSESS BUSINESS NEEDS",
        "SUBMIT APPLICATION WITH BUSINESS DOCS ",
        "KYC AND BUSINESS VERIFICATION",
        "INITIAL DEPOSIT",
        "ACCOUNT ACTIVATION",
        "RECEIVE CHEQUE BOOK AND DETAILS",
      ],
      sections: [
        {
          title: "🧠 Is an Current Account Right for You?",
          body: [
            "Essential for business owners and entrepreneurs",
            "Suitable for those making multiple daily transactions",
            "Ideal for professionals like doctors, lawyers, and consultants",
            "Perfect for managing business cash flows",
            "Best for those who need overdraft facilities",
          ],
        },
        {
          title: "💡 Tips Before Applying",
          body: [
            "Compare transaction limits and charges across banks",
            "Check for bundled services like cash management",
            "Look for accounts with overdraft facilities if needed",
            "Review charges for cheque books and demand drafts",
            "Assess the bank's business banking support",
          ],
        },
        {
          title: "⚠️ Common Mistakes",
          body: [
            "Using current account for personal savings (no interest earned)",
            "Not monitoring average monthly balance requirements",
            "Overlooking transaction charges beyond free limits",
            "Ignoring cash handling and deposit charges",
            "Not utilizing bundled business services offered",
          ],
        },
      ],
    },

    fixed: {
      title: " 🏦 FIXED DEPOSIT",
      content:
        " A fixed deposit account is a savings instrument where you deposit a lump sum amount for a fixed tenure at a predetermined interest rate, which is typically higher than a regular savings account. ",
      contentHeading: " ⦿ HOW A FIXED DEPOSIT WORKS ",
      steps: [
        "DECIDE AMOUNT AND TENURE",
        "CHOOSE FD SCHEME",
        "SUBMIT APPLICATION",
        "TRANSFER FUNDS",
        "FD ACCOUNT CREATED",
        "RECEIVE MATURITY AMOUNT WITH INTEREST",
      ],
      sections: [
        {
          title: "🧠 Is a Fixed Deposit Right for You?",
          body: [
            "Perfect for risk-averse investors seeking guaranteed returns",
            "Suitable for achieving specific financial goals with timelines",
            "Ideal for parking surplus funds for short to long term",
            "Great for senior citizens (higher interest rates available)",
            "Best for those who don't need immediate access to funds",
          ],
        },
        {
          title: "💡 Tips Before Applying",
          body: [
            "Compare interest rates across banks and tenures",
            "Consider laddering FDs for different maturity dates",
            "Check if premature withdrawal is allowed and penalty charges",
            "Look for tax-saving FDs if you need deductions under Section 80C",
            "Review the interest payout options (monthly, quarterly, maturity)",
          ],
        },
        {
          title: "⚠️ Common Mistakes",
          body: [
            "Breaking FDs prematurely and losing interest",
            "Not considering inflation when locking money long-term",
            "Ignoring tax implications on interest earned",
            "Putting all savings in one FD instead of laddering",
            "Not comparing rates between banks and NBFCs",
          ],
        },
      ],
    },

    recurring: {
      title: " 🔓  RECURRING DEPOSIT",
      content:
        " A recurring deposit account is a savings scheme where you deposit a fixed amount regularly (usually monthly) for a predetermined period and earn interest on the accumulated amount at maturity. ",
      contentHeading: " ⦿ HOW A RECURRING DEPOSIT WORKS ",
      steps: [
        "CHOOSE MONTHLY AMOUNT AND TENURE",
        "SUBMIT APPLICATION",
        "SET UP AUTO-DEBIT",
        "MONTHLY DEPOSITS BEGIN",
        "CONTINUE DEPOSITS TILL MATURITY",
        "RECEIVE MATURITY AMOUNT WITH INTEREST",
      ],
      sections: [
        {
          title: "🧠 Is a Recurring Deposit Right for You?",
          body: [
            "Perfect for building savings discipline with regular deposits",
            "Suitable for those with fixed monthly income",
            "Ideal for achieving short to medium-term financial goals",
            "Great for people who can't invest lump sum amounts",
            "Best for creating a savings habit while earning interest",
          ],
        },
        {
          title: "💡 Tips Before Applying",
          body: [
            "Choose tenure based on your financial goal timeline",
            "Ensure you can commit to monthly deposits without default",
            "Compare interest rates across different banks",
            "Check penalty charges for missing monthly installments",
            "Consider starting with a smaller amount you can sustain",
          ],
        },
        {
          title: "⚠️ Common Mistakes",
          body: [
            "Missing monthly installments and paying penalties",
            "Choosing tenure too long without considering liquidity needs",
            "Not accounting for auto-debit failures due to insufficient balance",
            "Premature closure leading to lower interest rates",
            "Ignoring alternative investment options with better returns",
          ],
        },
      ],
    },

    salary: {
      title: " 💶 SALARY ACCOUNT",
      content:
        " A salary account is a type of savings account opened by an employer to credit employee salaries, offering benefits like zero minimum balance and additional banking features. ",
      contentHeading: " ⦿ HOW A SALARY ACCOUNT WORKS ",
      steps: [
        "EMPLOYER PARTNERS WITH BANK",
        "EMPLOYEE SUBMITS DETAILS",
        "BANK OPENS ACCOUNT",
        "KYC VERIFICATION",
        "ACCOUNT ACTIVATED",
        "SALARY CREDITED MONTHLY",
      ],
      sections: [
        {
          title: "🧠 Is a Salary Account Right for You?",
          body: [
            "Automatically opened for salaried employees",
            "Ideal if your employer has a tie-up with a specific bank",
            "Perfect for those who don't want minimum balance hassles",
            "Suitable for accessing salary-linked benefits and loans",
            "Great for employees seeking complimentary services",
          ],
        },
        {
          title: "💡 Tips Before Applying",
          body: [
            "Check if your employer offers choice between multiple banks",
            "Review the banking services and digital features",
            "Inquire about conversion to regular savings if you change jobs",
            "Look for additional benefits like insurance or locker facilities",
            "Ensure the bank has good ATM network in your area",
          ],
        },
        {
          title: "⚠️ Common Mistakes",
          body: [
            "Not using the account after changing jobs (converts to savings)",
            "Ignoring the conversion timeline and minimum balance requirements",
            "Not transferring funds when account converts to regular savings",
            "Missing out on salary-linked pre-approved loan offers",
            "Not updating employer about account details correctly",
          ],
        },
      ],
    },
  };

  const account = accountInfo[accountType];

  if (!account) {
    return <p>Account not found</p>;
  }

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "40px 90px 30px 70px",
        }}
      >
        <h1 className="loan-page-h1">{account.title}</h1>
        <Box sx={{ display: "flex", flexDirection: "row", gap: 6 }}>
          <Button
            component={Link}
            to="/account/eligibility"
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
            to="/account/documents"
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
        {account.content}
      </Box>
      <Box sx={{ color: "#5B122D", padding: "40px 40px 40px 40px" }}>
        <h3 className="loan-page-h3">{account.contentHeading}</h3>
        <LoanSteps steps={account.steps} />
      </Box>
      <Box sx={{color: "#5B122D", 
        padding: "40px 70px 40px 70px",
        fontSize: "20px",
        display: "flex", 
        flexDirection: "row",
        gap: 2,
      }}>
       {account.sections.map((section, index)=>(
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

export default SeparateAccountPage;