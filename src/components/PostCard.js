import React from 'react';
import PropTypes from 'prop-types';

import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFF',
    marginTop: 10,
    marginBottom: 10,
    marginHorizontal: 20,
    padding: 20,
    borderRadius: 5,
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  subtitle: {
    color: '#C5C5C5',
    fontSize: 14,
    fontWeight: 'bold',
  },
  body: {
    marginTop: 10,
  },
});

const PostCard = ({ data }) => (
  <View style={styles.card}>
    <View>
      <Text style={styles.title}>{data.title}</Text>
    </View>
    <View>
      <Text style={styles.subtitle}>{data.author}</Text>
    </View>
    <View>
      <Text style={styles.body}>{data.content}</Text>
    </View>
  </View>
);

PostCard.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    content: PropTypes.string,
  }).isRequired,
};

export default PostCard;
