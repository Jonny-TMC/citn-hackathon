import { Box, Stat, StatLabel, StatNumber, StatHelpText, SimpleGrid } from '@chakra-ui/react';

interface StatsCardProps {
  label: string;
  value: number;
  helpText?: string;
}

function StatsCard({ label, value, helpText }: StatsCardProps) {
  return (
    <Box p={4} borderRadius="lg" borderWidth="1px" shadow="sm">
      <Stat>
        <StatLabel>{label}</StatLabel>
        <StatNumber>{value.toLocaleString()}</StatNumber>
        {helpText && <StatHelpText>{helpText}</StatHelpText>}
      </Stat>
    </Box>
  );
}

interface ZipCodeStatsProps {
  zipCode: string;
  censusData?: any;
  foodAssistanceData?: any;
  povertyData?: any;
}

export default function ZipCodeStats({ 
  zipCode, 
  censusData, 
  foodAssistanceData, 
  povertyData 
}: ZipCodeStatsProps) {
  if (!censusData || !foodAssistanceData || !povertyData) {
    return null;
  }

  const census = censusData.find((d: any) => d.zipCode === zipCode);
  const foodAssistance = foodAssistanceData.find((d: any) => d.zipCode === zipCode);
  const poverty = povertyData.find((d: any) => d.zipCode === zipCode);

  if (!census || !foodAssistance || !poverty) {
    return null;
  }

  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={4}>
      <StatsCard
        label="Total Population"
        value={census.totalPopulation}
      />
      <StatsCard
        label="Median Income"
        value={census.medianIncome}
        helpText="Annual household income"
      />
      <StatsCard
        label="Food Assistance"
        value={foodAssistance.householdsWithFoodStamps}
        helpText={`${foodAssistance.percentWithFoodStamps}% of households`}
      />
      <StatsCard
        label="Below Poverty Level"
        value={poverty.belowPovertyLevel}
        helpText={`${poverty.percentBelowPoverty}% of population`}
      />
    </SimpleGrid>
  );
}