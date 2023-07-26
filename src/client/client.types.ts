import { Robot } from '../shared/robot.type.js';

export type ResponsePayload<T> = {
  statusCode: number;
  messageCode: string;
} & T;

export type RobotsList = {
  robots: { totalCount: number; items: Robot[] };
};

export type FetchResult<T = any> = {
  url: string;
  status: number;
  payload: T;
};

export type TaskInputParameters = {
  name: string;
  type: string;
  label: string;
  pattern: string;
  required: boolean;
  encrypted: boolean;
  description: string;
  defaultValue: string;
};

export type CreateTaskPayload = {
  recordVideo: false;
  inputParameters: unknown;
};

export type ClientError = {
  status: number;
  url: string;
  payload: unknown;
};

export type StoredRobotTask = {
  result: StoredRobotTaskResult;
};

export type StoredRobotTaskResult = {
  id: string;
  status: string;
};
