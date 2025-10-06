'use client';

import { useState } from 'react';
import { Box, Container, Heading, VStack, Text, Divider } from '@chakra-ui/react';
import Map from '../components/Map';
import ZipCodeStats from '../components/ZipCodeStats';
import DataChart from '../components/DataChart';
import ResourceList from '../components/ResourceList';
import { useCensusData, useFoodAssistanceData, usePovertyData } from '../hooks/useData';

export default function Home() {
  const [selectedZipCode, setSelectedZipCode] = useState<string | null>(null);
  const { data: censusData } = useCensusData();
  const { data: foodAssistanceData } = useFoodAssistanceData();
  const { data: povertyData } = usePovertyData();

  const formatChartData = () => {
    if (!foodAssistanceData || !povertyData) return [];
    
    return foodAssistanceData.map((item: any) => ({
      zipCode: item.zipCode,
      value: item.householdsWithFoodStamps,
      percentage: item.percentWithFoodStamps
    }));
  };

  return (
    <Container maxW="container.xl" py={8}>
      <VStack spacing={8} align="stretch">
        <Heading as="h1" size="2xl" textAlign="center">
          Cincinnati Community Resources
        </Heading>
        
        <Box borderRadius="lg" overflow="hidden" shadow="lg">
          <Map data={censusData} onZipCodeSelect={setSelectedZipCode} />
        </Box>

        {selectedZipCode && (
          <ZipCodeStats
            zipCode={selectedZipCode}
            censusData={censusData}
            foodAssistanceData={foodAssistanceData}
            povertyData={povertyData}
          />
        )}

        <Divider />

        <Box>
          <Heading size="lg" mb={4}>Food Assistance by ZIP Code</Heading>
          <DataChart
            title="Households Receiving Food Assistance"
            data={formatChartData()}
          />
        </Box>

        <Divider />

        <ResourceList zipCode={selectedZipCode || undefined} />
      </VStack>
    </Container>
  );
}