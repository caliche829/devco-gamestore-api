import 'reflect-metadata';
import { Handler } from 'aws-lambda';
import { ProcCreateVideoGames, ProcDeleteVideoGame, ProcListVideoGames, ProcOneVideoGame, ProcUpdateVideoGames } from './aws-services/gameStoreAws.service';

export const createVideoGames: Handler = async (event: any, _Context: any) => {
  try {
    return await ProcCreateVideoGames(event);
  }
  catch (error) {
    console.log(error);
  }
}

export const updateVideoGames: Handler = async (event: any, _Context: any) => {
  try {
    return await ProcUpdateVideoGames(event);
  }
  catch (error) {
    console.log(error);
  }
}

export const listVideoGames: Handler = async (event: any, _Context: any) => {
  try {
    return await ProcListVideoGames(event);
  }
  catch (error) {
    console.log(error);
  }
}

export const oneVideoGame: Handler = async (event: any, _Context: any) => {
  try {
    return await ProcOneVideoGame(event);
  }
  catch (error) {
    console.log(error);
  }
}

export const deleteVideoGame: Handler = async (event: any, _Context: any) => {
  try {
    return await ProcDeleteVideoGame(event);
  }
  catch (error) {
    console.log(error);
  }
}
