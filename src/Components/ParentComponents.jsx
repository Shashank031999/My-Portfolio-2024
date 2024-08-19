import React, { useState } from 'react'
import Grid from '@mui/material/Grid';
import LeftSide from './LeftSide/LeftSide';
import RightSide from './RightSide/RightSide';

const ParentComponents = () => {
  const [fromRightSideComp, setFromRightSideComp] = useState("");

  const getDataFromRightSideComp = (data) => {
    setFromRightSideComp(data)
  }

  return (
    <>
       <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
            <LeftSide fromRightSideComp={fromRightSideComp}/>
        </Grid>
        <Grid item xs={12} sm={6}>
            <RightSide getDataFromRightSideComp={getDataFromRightSideComp} />
        </Grid>
      </Grid>
    </>
  )
}

export default ParentComponents
