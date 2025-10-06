import axios from 'axios';

const BASE_URL = 'http://hackathon.churchitnetwork.com';

export interface CensusData {
  zipCode: string;
  totalPopulation: number;
  numberOfHouseholds: number;
  numberOfBusinesses: number;
  medianIncome: number;
}

export interface FoodAssistanceData {
  zipCode: string;
  totalHouseholds: number;
  householdsWithFoodStamps: number;
  percentWithFoodStamps: number;
}

export interface PovertyData {
  zipCode: string;
  totalPopulation: number;
  belowPovertyLevel: number;
  percentBelowPoverty: number;
}

const api = {
  async getCensusData(): Promise<CensusData[]> {
    const { data } = await axios.get(`${BASE_URL}/api/CensusData`);
    return data;
  },

  async getFoodAssistanceData(): Promise<FoodAssistanceData[]> {
    const { data } = await axios.get(`${BASE_URL}/api/CensusFoodAssistance`);
    return data;
  },

  async getPovertyData(): Promise<PovertyData[]> {
    const { data } = await axios.get(`${BASE_URL}/api/CensusPoverty`);
    return data;
  },
};

export default api;