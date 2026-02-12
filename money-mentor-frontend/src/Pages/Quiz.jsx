import { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  Typography,
  LinearProgress,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Container,
  CircularProgress
} from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

function Quiz() {
  const [quizData, setQuizData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);

  const topic = "Loans";
  const numberOfQuestions = 6;

  const handleStartQuiz = async () => {
    setLoading(true);
    try {
      const response = await fetch('/utils', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ topic, numberOfQuestions }),
      });

      const questions = await response.json();
      setQuizData(questions);
      setQuizStarted(true);
    } catch (error) {
      console.error('Error fetching questions:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAnswerClick = (answerIndex) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === quizData[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    setAnsweredQuestions([...answeredQuestions, {
      question: currentQuestion,
      selected: selectedAnswer,
      correct: quizData[currentQuestion].correctAnswer
    }]);

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizData.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedAnswer(null);
    } else {
      setShowScore(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowScore(false);
    setAnsweredQuestions([]);
    setQuizStarted(false);
    setQuizData([]);
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: 'background.primary',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: 2
      }}
    >
      <Container maxWidth="md">
        <Card sx={{ boxShadow: 6, bgcolor: 'background.secondary' }}>
          <CardContent sx={{ p: 4 }}>
            {!quizStarted ? (
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h3" gutterBottom fontWeight="bold" color="text.primary">
                  Welcome to the Quiz!
                </Typography>
                <Typography variant="h6" color="text.primary" sx={{ mb: 4, opacity: 0.8 }}>
                  Test your knowledge with our interactive quiz.
                </Typography>
                <Card sx={{ bgcolor: 'background.tertiary', mb: 4, p: 3 }}>
                  <Typography variant="h6" fontWeight="semibold" gutterBottom color="text.secondary">
                    What to expect:
                  </Typography>
                  <List>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircleOutlineIcon sx={{ color: 'text.secondary' }} />
                      </ListItemIcon>
                      <ListItemText primary="Multiple choice questions" sx={{ color: 'text.secondary' }} />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircleOutlineIcon sx={{ color: 'text.secondary' }} />
                      </ListItemIcon>
                      <ListItemText primary="Instant score tracking" sx={{ color: 'text.secondary' }} />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircleOutlineIcon sx={{ color: 'text.secondary' }} />
                      </ListItemIcon>
                      <ListItemText primary="Results at the end" sx={{ color: 'text.secondary' }} />
                    </ListItem>
                  </List>
                </Card>
                <Button
                  variant="contained"
                  size="large"
                  onClick={handleStartQuiz}
                  disabled={loading}
                  sx={{ 
                    px: 6, 
                    py: 1.5, 
                    fontSize: '1.1rem',
                    bgcolor: 'foreground.primary',
                    color: 'text.secondary',
                    '&:hover': { bgcolor: 'background.darkPrimary' }
                  }}
                >
                  {loading ? <CircularProgress size={24} sx={{ color: 'text.secondary' }} /> : 'Take Test'}
                </Button>
              </Box>
            ) : showScore ? (
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h4" fontWeight="bold" gutterBottom color="text.primary">
                  Quiz Complete!
                </Typography>
                <Typography variant="h1" fontWeight="bold" sx={{ my: 3, color: 'foreground.primary' }}>
                  {score}/{quizData.length}
                </Typography>
                <Typography variant="h5" sx={{ mb: 4, color: 'text.primary', opacity: 0.8 }}>
                  You scored {Math.round((score / quizData.length) * 100)}%
                </Typography>
                <Button
                  variant="contained"
                  size="large"
                  onClick={handleRestart}
                  sx={{ 
                    px: 6, 
                    py: 1.5,
                    bgcolor: 'foreground.primary',
                    color: 'text.secondary',
                    '&:hover': { bgcolor: 'background.darkPrimary' }
                  }}
                >
                  Restart Quiz
                </Button>
              </Box>
            ) : (
              <>
                <Box sx={{ mb: 4 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="body2" color="text.primary">
                      Question {currentQuestion + 1} of {quizData.length}
                    </Typography>
                    <Typography variant="body2" color="text.primary">
                      Score: {score}
                    </Typography>
                  </Box>
                  <LinearProgress
                    variant="determinate"
                    value={((currentQuestion + 1) / quizData.length) * 100}
                    sx={{ 
                      height: 8, 
                      borderRadius: 4,
                      bgcolor: 'background.tertiary',
                      '& .MuiLinearProgress-bar': { bgcolor: 'foreground.primary' }
                    }}
                  />
                </Box>

                <Typography variant="h5" fontWeight="bold" sx={{ mb: 3, color: 'text.primary' }}>
                  {quizData[currentQuestion]?.question}
                </Typography>

                <Box sx={{ mb: 3 }}>
                  {quizData[currentQuestion]?.options.map((option, index) => (
                    <Button
                      key={index}
                      fullWidth
                      variant={selectedAnswer === index ? 'contained' : 'outlined'}
                      onClick={() => handleAnswerClick(index)}
                      sx={{
                        mb: 1.5,
                        p: 2,
                        justifyContent: 'flex-start',
                        textAlign: 'left',
                        textTransform: 'none',
                        fontSize: '1rem',
                        borderColor: 'foreground.primary',
                        color: selectedAnswer === index ? 'text.secondary' : 'text.primary',
                        bgcolor: selectedAnswer === index ? 'foreground.primary' : 'transparent',
                        '&:hover': {
                          borderColor: 'foreground.primary',
                          bgcolor: selectedAnswer === index ? 'background.darkPrimary' : 'background.tertiary'
                        }
                      }}
                    >
                      <Box component="span" sx={{ fontWeight: 'bold', mr: 1 }}>
                        {String.fromCharCode(65 + index)}.
                      </Box>
                      {option}
                    </Button>
                  ))}
                </Box>

                <Button
                  variant="contained"
                  fullWidth
                  size="large"
                  onClick={handleNextQuestion}
                  disabled={selectedAnswer === null}
                  sx={{
                    bgcolor: 'foreground.primary',
                    color: 'text.secondary',
                    '&:hover': { bgcolor: 'background.darkPrimary' },
                    '&:disabled': {
                      bgcolor: 'background.tertiary',
                      color: 'text.primary',
                      opacity: 0.5
                    }
                  }}
                >
                  {currentQuestion === quizData.length - 1 ? 'Finish Quiz' : 'Next Question'}
                </Button>
              </>
            )}
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}

export default Quiz;