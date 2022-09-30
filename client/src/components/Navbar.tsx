import { Button, Box, AppBar, Container, Toolbar, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import { useAppFlow } from "../hooks/useAppFlow"

export const Navbar = () => {
  return(
    <Box sx={{flexGrow: 1}}>
      <AppBar position="static" color="transparent">
        <Container>
          <Toolbar>
            <Typography sx={{flexGrow: 1}}>
              <Link to="/">
                PERN Stack
              </Link>
            </Typography>

            <Button
              variant="contained"
              onClick={useAppFlow("/add-task")}
            >
              New Task
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  )
}