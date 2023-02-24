import { PlayerService } from "../PlayerService";

const { getAllSortById, getById } = PlayerService;

const GOOD_ID = '17';

test("player service getAll", async () => {
  const response = await getAllSortById();
 
  expect(response?.[0]).toMatchObject({
    id: expect.any(Number),
    firstname: expect.any(String),
    lastname: expect.any(String),
    shortname: expect.any(String),
    sex: expect.any(String),
    country: expect.any(Object),
    picture: expect.any(String),
    data: expect.any(Object),
  })
});

test("player service getById", async () => {
  const response = await getById(GOOD_ID);
 
  expect(response).toMatchObject({
    id: expect.any(Number),
    firstname: expect.any(String),
    lastname: expect.any(String),
    shortname: expect.any(String),
    sex: expect.any(String),
    country: expect.any(Object),
    picture: expect.any(String),
    data: expect.any(Object),
  })
});
