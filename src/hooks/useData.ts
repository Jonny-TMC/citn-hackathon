import { useQuery } from '@tanstack/react-query';
import api from '../services/api';

export const useCensusData = () => {
  return useQuery(['census-data'], () => api.getCensusData());
};

export const useFoodAssistanceData = () => {
  return useQuery(['food-assistance'], () => api.getFoodAssistanceData());
};

export const usePovertyData = () => {
  return useQuery(['poverty-data'], () => api.getPovertyData());
};