import { http } from "../../utils/http";

describe("http function", () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  test("fetches data and returns it correctly", async () => {
    const mockData = { message: "api data" };
    const mockResponse = { json: jest.fn().mockResolvedValue(mockData) };
    (global.fetch as jest.Mock).mockResolvedValue(mockResponse);

    const url = "https://example.com/api/data";
    const result = await http(url);

    expect(global.fetch).toHaveBeenCalledWith(url);
    expect(result).toEqual(mockData);
  });
});
