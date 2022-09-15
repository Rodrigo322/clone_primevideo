import { Image, StyleSheet, TouchableOpacity } from "react-native";

export const MoviesWatchingCard = (props) => {
  return (
    <TouchableOpacity>
      <Image
        style={styles.moviesWatchingCard}
        source={props.movieURl}
        alt={props.name}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  moviesWatchingCard: {
    marginRight: 20,
  },
});
