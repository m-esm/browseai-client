export type Robot = {
  id: string;
  name: string;
  createdAt: number;
  inputParameters: {
    name: string;
    label: string;
    pattern: string;
    required: boolean;
    encrypted: boolean;
    description: string;
    defaultValue: string;
    type: string;
    value: string;
  }[];
};
