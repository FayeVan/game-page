import {
  Box,
  HStack,
  ListItem,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";

const GenreListSkeleton = () => {
  return (
    <ListItem paddingY={"5px"}>
      <HStack>
        <Skeleton width="32px" height="32px" borderRadius={8} />
        <Skeleton width={{ base: "100px", md: "150px" }} height="12px" />
      </HStack>
    </ListItem>
  );
};

export default GenreListSkeleton;
