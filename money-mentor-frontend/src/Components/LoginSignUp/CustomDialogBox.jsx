import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from "@mui/material";

const CustomDialogBox = ({ open, title, message, btnText = "Ok", onClose }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: { backgroundColor: "background.primary", color: "background.secondary", borderRadius: 3, minWidth: 300 },
      }}
    >
      <DialogTitle sx={{ color: "background.secondary", fontFamily: "serif", fontWeight: 600 }}>
        {title}
      </DialogTitle>
      <DialogContent>
        <DialogContentText sx={{ color: "background.secondary", fontFamily: "serif" }}>
          {message}
        </DialogContentText>
      </DialogContent>
      <DialogActions sx={{ p: 2 }}>
        <Button
          onClick={onClose}
          variant="contained"
          sx={{
            backgroundColor: "background.secondary",
            color: "#5B122D",
            fontWeight: 600,
            fontFamily: "serif",
            "&:hover": { backgroundColor: "#a6757a", color: "background.secondary" },
          }}
        >
          {btnText}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CustomDialogBox;