import { AppBar, Toolbar , IconButton,Typography, Stack, Button} from '@mui/material'
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon"
function Navbar() {

  return (
   <AppBar position='static'>
    <Toolbar>
    <IconButton size="large" edge='start' color='inherit' aria-label='logo'>
        <CatchingPokemonIcon/>
    </IconButton> 
     <Typography variant='h6' component='div' sx={{flexGrow:1 }}>
        SEO Analyzer and Tracker
    </Typography>
    <Stack direction='row' spacing={2}>
        <Button color='inherit'>Features</Button>
        <Button color='inherit'>About</Button>
    </Stack> 
    </Toolbar>
    </AppBar>
  )
}

export default Navbar
