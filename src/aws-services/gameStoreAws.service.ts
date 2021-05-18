import { Container } from 'typedi';
import VideoGameService from '../services/gameStore.service';

export async function ProcCreateVideoGames(event: any) {
  let body = JSON.parse(event.body);
  const videoGameServiceInstance = Container.get(VideoGameService);
  let response = await videoGameServiceInstance.CreateVideoGame(body);
  return { body: JSON.stringify(response), statusCode: 200 };
};

export async function ProcUpdateVideoGames(event: any) {
  let body = JSON.parse(event.body);
  const videoGameServiceInstance = Container.get(VideoGameService);
  let response = await videoGameServiceInstance.UpdateVideoGame(body);
  return { body: JSON.stringify(response), statusCode: 200 };
}

export async function ProcListVideoGames(event: any) {
  const videoGameServiceInstance = Container.get(VideoGameService);
  let response = await videoGameServiceInstance.ListVideoGames();
  return { body: JSON.stringify(response), statusCode: 200 };
}

export async function ProcOneVideoGame(event: any) {
  let serialNumber = event.pathParameters.serialNumber;
  const videoGameServiceInstance = Container.get(VideoGameService);
  let response = await videoGameServiceInstance.OneVideoGame(serialNumber);
  return { body: JSON.stringify(response), statusCode: 200 };
}

export async function ProcDeleteVideoGame(event: any) {
  let serialNumber = event.pathParameters.serialNumber;
  const videoGameServiceInstance = Container.get(VideoGameService);
  let response = await videoGameServiceInstance.DeleteVideoGame(serialNumber);
  return { body: JSON.stringify(response), statusCode: 200 };
}