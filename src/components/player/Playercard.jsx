
import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import CardActions from '@mui/joy/CardActions';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Typography from '@mui/joy/Typography';
import AspectRatio from '@mui/joy/AspectRatio';
import Avatar from '@mui/material/Avatar';
import SportsBaseballRoundedIcon from '@mui/icons-material/SportsBaseballRounded';
import LinkMUI from '@mui/joy/Link';


export default function Playercard(props) {

  const { player } = props;

  return (
    <div className='outer-player-card'>
        <Card className='inner-player-card' variant='outlined'>
            <CardOverflow>
                <AspectRatio>
                    <img src={player.player_image} loading='lazy' alt={`MLB Player ${player.name_first} ${player.name_last}`}></img>
                </AspectRatio>
            </CardOverflow>
            <CardContent>
                <Typography><strong>{player.name_first} {player.name_last}</strong></Typography>
                <Typography><em>{player.team_name}</em></Typography>
            </CardContent>
            <CardContent className='inner-player-card-team-image'>
                <Avatar src={player.team_image} alt="Team Logo" variant="square" />
            </CardContent>
            <CardContent>
                <Box alignItems='center'>
                    <Typography>{player.position_txt}</Typography>
                    <Typography>#{player.jersey_number}</Typography>
                    <Typography startDecorator={<SportsBaseballRoundedIcon />}>{player.bats}/{player.throws}</Typography>
                </Box>
            </CardContent>
            <CardContent>
                <CardActions buttonFlex='1'>
                    <LinkMUI href={`${player.player_profile}`} target='_blank' underline='none'>
                        <Button className='inner-player-player-card-button-text'>MLB Profile</Button>
                    </LinkMUI>
                    <Link to={`/mlb/players/${player.player_id}`}>
                        <Button className='inner-player-player-card-button-text'>Profile</Button>
                    </Link>
                </CardActions>
            </CardContent>
        </Card>
    </div>
  );
};