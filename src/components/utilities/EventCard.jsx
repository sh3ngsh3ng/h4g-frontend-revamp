import { Box, Heading, Text, Flex, Button, Stack, Tag } from "@chakra-ui/react";
import stock from "../../static/Images/event-image/stock.png";
import { useDispatch } from "react-redux";
import { setEditForm } from "../actions/adminActions";
import { setViewEvent } from "../actions/userActions";
import { white } from "../constants/color";

const getMonth = (date) => {
  const month = date.split("-")[1];
  switch (month) {
    case "01":
      return "Jan";
    case "02":
      return "Feb";
    case "03":
      return "Mar";
    case "04":
      return "Apr";
    case "05":
      return "May";
    case "06":
      return "Jun";
    case "07":
      return "Jul";
    case "08":
      return "Aug";
    case "09":
      return "Sep";
    case "10":
      return "Oct";
    case "11":
      return "Nov";
    default:
      return "Dec";
  }
};

const getDay = (date) => {
  return date.split("-")[2].slice(0, 2);
};

const getYear = (date) => {
  return date.split("-")[0];
};

export const EventCard = ({ data, type, action }) => {
  const dispatch = useDispatch();
  const startMonth = getMonth(data.startDate);
  const startDay = getDay(data.startDate);
  const startYear = getYear(data.startDate);
  return (
    <>
      <Box
        width="90%"
        backgroundColor={white}
        mt={5}
        borderWidth="1px"
        height="250px"
        borderRadius={8}
        overflow="hidden"
        position="relative"
      >
        <Flex justifyContent="space-between">
          <Box lineHeight={0} padding="10px">
            <Heading as="h1" size="md">
              {data.name}
            </Heading>
            <Text fontSize="sm">by {data.organization}</Text>
          </Box>
          <Box padding="10px">
            {type == "admin" ? (
              <Button
                colorScheme="red"
                onClick={() => {
                  action();
                  dispatch(setEditForm(data));
                }}
              >
                Edit
              </Button>
            ) : (
              <Button
                colorScheme="red"
                onClick={() => {
                  action();
                  dispatch(setViewEvent(data));
                }}
              >
                Join
              </Button>
            )}
          </Box>
        </Flex>
        <Stack direction="row" padding="10px">
          {data.skills.map((skill) => (
            <Tag color="red" bgColor="red.100" borderRadius="full">
              {skill}
            </Tag>
          ))}
        </Stack>
        <div
          style={{ height: "160px", backgroundImage: `url(${stock})` }}
          position="relative"
        ></div>
        <Box
          position="absolute"
          bottom="10px"
          right="10px"
          backgroundColor="rgba(255,255,255,1)"
          padding="10px"
          borderRadius="lg"
          borderColor="red"
          borderWidth="2px"
          width="55px"
          height="55px"
          justifyContent="center"
          alignItems="center"
        >
          <Text color="red" lineHeight="1" align="center" fontWeight="bold">
            {startMonth}
            <br />
            {startDay}
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default EventCard;
