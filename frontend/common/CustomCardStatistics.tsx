import {Box, Grid, Typography} from '@mui/material';
import {FC} from 'react';

interface Props {
  title: string;
  amount: string;
  icons?: any;
  subTitle?: string;
  icons2?: any;
  percentage?: string;
}

const CustomCardForStatistics: FC<Props> = ({
  title,
  amount,
  icons,
  icons2,
  subTitle,
  percentage,
}) => {
  return (
    <Grid
      container
      spacing={0}
      sx={{
        display: 'flex',
        background: '#fff',
        borderRadius: '20px',
        border: '1px solid #F0EEEF',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <Grid
        item
        xs={1.5}
        sx={{
          height: '50px',
          width: '50px',
          m: '6px',
          backgroundColor: '#EBE9ED',
          borderRadius: '14px',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {icons}
      </Grid>
      <Grid item xs={5}>
        <Typography sx={{fontSize: '17px', fontWeight: '700'}}>
          {title}
        </Typography>
        <Typography
          sx={{
            fontSize: '12px',
            fontWeight: '700',
            opacity: '0.6',
          }}>
          {subTitle}
        </Typography>
      </Grid>
      <Grid
        item
        xs={1.5}
        sx={{
          borderRadius: '10px',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {icons2}
      </Grid>
      <Grid
        item
        xs={3}
        sx={{
          borderRadius: '10px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'end',
          justifyContent: 'right',
          textAlign: 'right',
          pr: '9px',
        }}>
        <Box sx={{fontSize: '16px', fontWeight: '700', opacity: '.6'}}>
          {' '}
          {amount}
        </Box>
        <Box sx={{fontSize: '12px', fontWeight: '700', opacity: '.4'}}>
          {' '}
          {percentage}
        </Box>
      </Grid>
    </Grid>
  );
};
export default CustomCardForStatistics;
