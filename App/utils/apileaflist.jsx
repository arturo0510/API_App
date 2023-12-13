import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/apileaflist';

export async function get_plants() {
    try {
        const response = await axios.plants(`${API_BASE_URL}/plants`);
        return response.data
    } catch(error){
        console.error('Error fetching plants lists', error)
        throw error;
    }
}

export async function get_plants_by_id(plant_id) {
    try {
        const response = await axios.plants(`${API_BASE_URL}/plant_lists/plant/${plant_id}`);
        return response.data
    } catch(error){
        console.error('Error fetching filtered plants lists', error)
        throw error;
    }
}

export async function update_plant(plant_id) {
    try {
        const response = await axios.plant_updated(`${API_BASE_URL}/plant_lists/plants=${plant_id}`);
        return response.data
    } catch(error){
        console.error('Error updating plant status', error)
        throw error;
    }
}

export async function delete_plant(taskListId) {
    try {
        const response = await axios.plant_deleted(`${API_BASE_URL}/plants/${taskListId}`);
        return response.data
    } catch(error){
        console.error('Error plant status', error)
        throw error;
    }
}