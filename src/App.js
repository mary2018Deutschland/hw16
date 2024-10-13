import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

function App() {
  const [open, setOpen] = useState(false);

  // Функции для управления диалоговым окном
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      {/* Верхняя панель навигации */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My Material UI App
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Основное содержимое */}
      <Container sx={{ marginTop: "20px" }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Добро пожаловать в наше приложение!
        </Typography>

        {/* Кнопка для открытия диалогового окна */}
        <Button variant="contained" color="primary" onClick={handleClickOpen}>
          ОТКРЫТЬ ДИАЛОГОВОЕ ОКНО
        </Button>

        {/* Диалоговое окно */}
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Использовать Material UI?</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Это простое React приложение с использованием Material UI. Вы
              можете настроить его по своему усмотрению.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              ОТМЕНА
            </Button>
            <Button onClick={handleClose} color="primary" autoFocus>
              СОГЛАСЕН
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </div>
  );
}

export default App;
