import MaterialTable from 'material-table';
import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import { Button } from '@material-ui/core';
import { Container } from '@material-ui/core';




//import React from 'react'

export default function Playlist() {
  return (
    <>
     
     <MaterialTable
      title="MUSIC LIST"
      columns={[
        { title: 'Song Name', field: 'name' },
        { title: 'Singer Name', field: 'singername' },
        { title: 'Duration', field: 'duration', type: 'numeric' },
        
        {title:'',field:'delete',type:'string'},
    
        
        
        
        
        
        
      ]}
      data={[
        
        { name: 'Army', singername: 'ellie goulding', duration: 1,delete: <DeleteIcon/>, },
        { name: 'Blank Space', singername: 'taylor swift', duration: 2,delete: <DeleteIcon/> },
        {name: 'closure', singername: 'rock',duration: 3,delete: <DeleteIcon/> },
        {name: 'burn', singername: 'ellie',duration: 4,delete: <DeleteIcon/> },
        {name: 'Dark horse', singername: 'ketty perry',duration: 2,delete: <DeleteIcon/>},
        {name: 'waka waka', singername: 'shakira',duration: 3,delete: <DeleteIcon/>},
        {name: 'take me home', singername: 'jess glynn',duration: 2,delete: <DeleteIcon/>},
        {name: 'she wolf', singername: 'shakira',duration: 1,delete: <DeleteIcon/>},
        
      ]}        
      options={{
        search: true
      }}
      

    />
    {/** 
    <DeleteIcon/>
    <Container>
    <Button color="primary" variant="contained" onClick={()=>console.log("you clicked me")}>
      delete
      </Button>
      </Container>
 ***/}
      </>
  )
}