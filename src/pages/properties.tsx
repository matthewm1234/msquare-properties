import React, { useEffect, useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Divider,
} from '@mui/material';
import fetchProperties from '../api/fetchProperties';

function PropertiesScreen() {
  const [properties, setProperties] = useState()

  useEffect(() => {
    getProperties()
  }, [])

  const getProperties = async () => {
    const result = await fetchProperties();
    console.log({ result })
  }

  return (
    <Box className="px-4 py-6">
      <Box className="container mx-auto px-4 py-6">
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Card
              className="rounded-xl shadow-md relative"
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '1rem',
              }}
            >
              <CardMedia
                component="img"
                image="images/properties/a1.jpg"
                alt=""
                className="rounded-t-xl"
                sx={{
                  height: 256, // same as h-64 in Tailwind
                  width: '100%',
                  objectFit: 'cover',
                }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Box className="text-left md:text-center lg:text-left mb-6">
                  <Typography variant="body2" className="text-gray-600">
                    Apartment
                  </Typography>
                  <Typography
                    variant="h6"
                    component="h3"
                    className="text-xl font-bold"
                  >
                    Boston Commons Retreat
                  </Typography>
                </Box>

                <Typography
                  component="h3"
                  className="absolute top-[10px] right-[10px] bg-white px-4 py-2 rounded-lg text-blue-500 font-bold text-right md:text-center lg:text-right"
                >
                  $4,200/mo
                </Typography>

                <Box className="flex justify-center gap-4 text-gray-500 mb-4">
                  <Typography variant="body2">
                    <i className="fa-solid fa-bed"></i> 3
                    <span className="md:hidden lg:inline"> Beds</span>
                  </Typography>
                  <Typography variant="body2">
                    <i className="fa-solid fa-bath"></i> 2
                    <span className="md:hidden lg:inline"> Baths</span>
                  </Typography>
                  <Typography variant="body2">
                    <i className="fa-solid fa-ruler-combined"></i> 1,500
                    <span className="md:hidden lg:inline"> sqft</span>
                  </Typography>
                </Box>

                <Box className="flex justify-center gap-4 text-green-900 text-sm mb-4">
                  <Typography variant="body2">
                    <i className="fa-solid fa-money-bill"></i> Weekly
                  </Typography>
                  <Typography variant="body2">
                    <i className="fa-solid fa-money-bill"></i> Monthly
                  </Typography>
                </Box>

                <Divider className="mb-5" />

                <Box className="flex flex-col lg:flex-row justify-between mb-4">
                  <Box className="flex items-center gap-2 mb-4 lg:mb-0">
                    <i className="fa-solid fa-location-dot text-lg text-orange-700"></i>
                    <Typography className="text-orange-700" variant="body2">
                      Boston MA
                    </Typography>
                  </Box>
                  <Button
                    variant="contained"
                    href="property.html"
                    sx={{
                      textTransform: 'none',
                      padding: '0.5rem 1rem',
                      borderRadius: '0.5rem',
                      fontSize: '0.875rem',
                      backgroundColor: '#3b82f6',
                      '&:hover': {
                        backgroundColor: '#2563eb',
                      },
                    }}
                  >
                    Details
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default PropertiesScreen;
