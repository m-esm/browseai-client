import { TaskInputParameters } from '../client/client.types.js';

export type Robot = {
  id: string;
  name: string;
  createdAt: number;
  inputParameters: TaskInputParameters[];
};
