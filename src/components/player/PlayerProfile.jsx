
import React from 'react';
import capitalizeFirstLetter from '../../utils/Default/capitalize';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import AspectRatio from '@mui/joy/AspectRatio';
import Typography from '@mui/joy/Typography';
import Button from '@mui/joy/Button';
import LinkMUI from '@mui/joy/Link';
import SportsBaseballIcon from '@mui/icons-material/SportsBaseball';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';


export default function PlayerProfile(props) {

  const { player } = props;

  return (
    <div className='outer-player-profile'>
      <Card className='inner-player-profile' orientation="horizontal">
          <AspectRatio className='inner-player-profile-image-container'>
            <img className='inner-player-profile-team-image' src={player.team_image} alt={player.team_name} />
            <img  className='inner-player-profile-player-image'src={player.player_image} alt={`${player.name_first} ${player.name_last}`} />
          </AspectRatio>
        <CardContent>
          <div className='inner-player-profile-center'>
            <Typography className='inner-player-profile-header'>{player.name_first} {player.name_last}</Typography>
            <Typography>{player.team_name} ({player.team_abbrev})</Typography>
          </div>
          <div className='inner-player-profile-table'>
            <table>
              <tbody>
                <tr>
                  <th><Typography>Nationality</Typography></th>
                  <th><Typography>City / State</Typography></th>
                  <th><Typography>College</Typography></th>
                </tr>
                <tr>
                  <td><Typography>{player.birth_country}</Typography></td>
                  <td><Typography>{player.birth_city} / {player.birth_state}</Typography></td>
                  <td><Typography>{player.college}</Typography></td>
                </tr>
                <tr>
                  <th><Typography>Age</Typography></th>
                  <th><Typography>MLB Debut</Typography></th>
                  <th><Typography>Stats</Typography></th>
                </tr>
                <tr>
                  <td><Typography>{player.age}</Typography></td>
                  <td><Typography>{player.pro_debut_date.split('T')[0]}</Typography></td>
                  <td><Typography>{capitalizeFirstLetter(player.primary_stat_type)}</Typography></td>
                </tr>
                <tr>
                  <th><Typography>B/T</Typography></th>
                  <th><Typography>Position</Typography></th>
                  <th><Typography>Jersey Number</Typography></th>
                </tr>
                <tr>
                  <td><Typography>{player.bats}/{player.throws}</Typography></td>
                  <td><Typography>{player.primary_position_txt}</Typography></td>
                  <td><Typography>#{player.jersey_number}</Typography></td>
                </tr>
              </tbody>
            </table>
          </div>
            <div className='inner-player-profile-media-icons'>
              <LinkMUI href={`${player.player_profile}`} target='_blank' underline='none'>
                <Button><SportsBaseballIcon /></Button>
              </LinkMUI>
              <LinkMUI href={`https://www.google.com/search?q=${player.name_first}+${player.name_last}`} 
              target='_blank' underline='none'>
                <Button><GoogleIcon /></Button>
              </LinkMUI>
              <LinkMUI href={`https://twitter.com/${player.twitter_id}`} target='_blank' underline='none'>
                <Button><TwitterIcon /></Button>
              </LinkMUI>
            </div>
          </CardContent>
      </Card>
    </div>
  );
};