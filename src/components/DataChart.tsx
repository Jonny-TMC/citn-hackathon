import { Box, Heading } from '@chakra-ui/react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

interface ChartData {
  zipCode: string;
  value: number;
  percentage: number;
}

interface DataChartProps {
  title: string;
  data: ChartData[];
}

export default function DataChart({ title, data }: DataChartProps) {
  return (
    <Box h="400px" w="100%">
      <Heading size="md" mb={4}>{title}</Heading>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="zipCode" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#3182CE" />
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
}