import axios from "axios";
import { CarResponse, Car, CarEntry } from "../types/types";
import { API_URL } from "../utility/constants";

export const getCars = async (): Promise<CarResponse[]> => {
  try {
    const response = await axios.get(`${API_URL}/cars`);
    return response.data._embedded.cars;
  } catch (error) {
    console.error("Error fetching cars:", error);
    throw error;
  }
};

export const deleteCar = async (link: string): Promise<CarResponse> => {
  try {
    const response = await axios.delete(link);
    return response.data;
  } catch (error) {
    console.error("Error fetching cars:", error);
    throw error;
  }
};

export const addCar = async (car: Car): Promise<CarResponse> => {
  try {
    const response = await axios.post(`${API_URL}/cars`, car);
    return response.data;
  } catch (error) {
    console.error("Error fetching cars:", error);
    throw error;
  }
};

export const updateCar = async (carEntry: CarEntry): Promise<CarResponse> => {
  try {
    const response = await axios.put(carEntry.url, carEntry.car);
    return response.data;
  } catch (error) {
    console.error("Error fetching cars:", error);
    throw error;
  }
};
