
import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Avatar } from '@mui/material';


export default function PlayerTable(props) {

  /**
   * Function that returns the table columns
   * @returns {Array} - The array with the columns
   */
  const getColumns = () => {
    return [
        // { field: 'id', headerName: 'ID', width: 80},
        { field: 'jersey_number', headerName: 'Number', width: 80},
        { field: 'name_first', headerName: 'First Name', width: 105},
        { field: 'name_last', headerName: 'Last Name', width: 105},
        { field: 'position_txt', headerName: 'Position', width: 80},
        { field: 'bats_throws', headerName: 'B/T', width: 40},
        { field: 'team_name', headerName: 'Team', width: 220},
        { field: 'team_image', headerName: '', width: 100, renderCell: (params) => (
        <Avatar src={params.value} alt="Team Logo" variant="square" />
          )}
    ];
  };

  /**
   * Function that maps and returns the table rows
   * @param {Array} players - The array with the player objects
   * @returns {Array} - The array with the rows, each row corresponds to a player
   */
  const getRows = (players) => {
    try {
        return players.map((player) => ({
            id: player.player_id,
            jersey_number: player.jersey_number,
            name_first: player.name_first,
            name_last: player.name_last,
            position_txt: player.position_txt,
            bats_throws: `${player.bats}/${player.throws}`,
            team_name: `${player.team_name} (${player.team_abbrev})`,
            team_image: player.team_image
        }));

    } catch (err) {
        return [];
    };
  };

  /**
   * Function that set the initial pagination for the table
   * @returns {Object} - The pagination
   */
  const setInitialPagination = () => {
    return {
        pagination: {
            paginationModel: { page: 0, pageSize: 20 },
            },
    };
  };

  /**
   * Function that set the page size options
   * @returns {Array} - The array with the page size options
   */
  const setPageSizeOptions = () => {
    return [10, 20, 40, 60, 80];
  };

  return (
    <div className='outer-player-table'>
      <DataGrid className='inner-player-table' rows={getRows(props.players)} columns={getColumns()}
      initialState={setInitialPagination()} pageSizeOptions={setPageSizeOptions()} checkboxSelection/>
    </div>
  );
};