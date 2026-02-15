import {
  Box,
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  Grid,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import HomePageCard from '../Components/HomePage/HomePageCard';
import IntroductionToFeature from '../Components/IntroductionToFeature';
import MoneyMentorIMG from "../Components/HomePage/MoneyMentor.png";
import theme from "../theme";

function Home() {
    const cardSectionRef = useRef(null); 
    const scrollToCards = () => {
        cardSectionRef.current?.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    };   
    useEffect(() => {
        const appContainer = document.getElementById('app-container');
        if (appContainer) {
            appContainer.style.backgroundColor = theme.palette.background.primary;
        }

        return () => {
            if (appContainer) {
                appContainer.style.backgroundColor = '#F4E1C6';
            }
        };
    }, []);
  return (
        <Box >
             <Box sx={{
                position: 'fixed',
                top: 20,
                right: 20,
                display: 'flex',
                gap: 2,
                zIndex: 1000
            }}>
                <Button
                    component={Link}
                    to="/login"
                    variant="outlined"
                    sx={{
                        color: 'background.secondary',
                        borderColor: 'background.secondary',
                        fontFamily: 'Poppins',
                        '&:hover': {
                            backgroundColor: 'background.secondary',
                            color: 'background.primary',
                            borderColor: 'background.secondary'
                        }
                    }}
                >
                    Login
                </Button>
                <Button
                    component={Link}
                    to="/signup"
                    variant="contained"
                    sx={{
                        backgroundColor: 'background.tertiary',
                        color: 'background.secondary',
                        fontFamily: 'Poppins',
                        '&:hover': {
                            backgroundColor: 'background.secondary',
                            color: 'background.primary'
                        }
                    }}
                >
                    Sign Up
                </Button>
            </Box>
            <Box sx={{
                height: '100vh', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                px: 2 
                }}> 
                    <Box sx={{
                        height: '40vh',
                        maxWidth: 1200,
                        width: '100%', 
                        display: 'flex',
                        gap: 4, 
                        alignItems: 'center',
                        flexWrap: { xs: 'wrap', md: 'nowrap' } 
                    }}>
                <IntroductionToFeature
                backgroundboxsx={{
                    height: 300, 
                    color: 'background.secondary', 
                    mt: 8
                }}
                btnsx={{
                    width: 240,
                    fontSize: 30, 
                    ml:45,
                    fontFamily: 'Montserrat', 
                    backgroundColor: 'background.tertiary',
                    color: 'background.secondary',
                    '&:hover': {
                    backgroundColor: 'background.secondary',
                    color: 'background.primary'
                    }
                }}
                btntext="Get Started!"
                title="Welcome to Money Mentor!"
                description="Your educational platform to learn banking procedures and financial basics."
                scrollFN={scrollToCards}
                />
                <Box
                component="img"
                src={MoneyMentorIMG}
                alt="Money Mentor illustration"
                sx={{
                    height: '80%',
                    maxWidth: '50%',
                    objectFit: 'contain',
                    display: { xs: 'none', md: 'block' } 
                }}
                />
                </Box>
            </Box>

        <Box 
            ref={cardSectionRef}
            sx={{display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 50,
            padding: 5,
            minHeight: '400px',
            height:'100vh'}}>
                <HomePageCard 
                    frontText="LEARN"
                    buttons={[
                    {
                        text: 'Loans',
                        link: '/typesofloan'
                    },
                    {
                        text: 'Accounts',
                        link: '/typesofaccounts'
                    },
                    {
                        text: 'Taxes',
                        link: '/taxestimator'
                    }
                ]} />
                <HomePageCard 
                    frontText="PLAN"
                    buttons={[
                    {
                        text: 'Budget Planner',
                        link: '/budgetplanner'
                    },
                    {
                        text: 'Loan Calculator',
                        link: '/loanpage'
                    },
                    {
                        text: 'Tax Estimator',
                        link: '/taxestimator'
                    }
                ]} />
                <HomePageCard 
                    frontText="TRACK"
                    buttons={[
                    {
                        text: 'Dashboard',
                        link: '/dashboard'
                    },
                    {
                        text: 'Application',
                        link: '/loanapplication'
                    },
                    {
                        text: 'Quizzes',
                        link: '/quiz'
                    }
                ]} />
        </Box>
    </Box>
  );
}

export default Home;
