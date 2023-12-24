import axios from 'axios';

const obsService = {
  getSceneList: async () => {
    console.log(process.env);
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_OBS_SOCKET_SERVER}:${process.env.NEXT_PUBLIC_OBS_SOCKET_PORT}/scenes`);
        return response.data.sceneList;
    } catch (error) {
      console.error('Error getting scene list:', error);
      return [];
    }
  },

  changeScene: async (scene: string) => {
    const data = {
        "sceneName": scene
    }
    try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_OBS_SOCKET_SERVER}:${process.env.NEXT_PUBLIC_OBS_SOCKET_PORT}/switchScene`, data);
        return response.data;
    } catch (error) {
      console.error('Error posting data:', error);
      return null;
    }
  },
};

export default obsService;
