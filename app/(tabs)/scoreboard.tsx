import { StyleSheet, Button } from 'react-native';
import React, { useState } from 'react';
import { Text, View } from '@/components/Themed';

export default function TabTwoScreen() {
  const [teamAScore, setTeamAScore] = useState<number>(0);
  const [teamBScore, setTeamBScore] = useState<number>(0);

  const increaseScore = (team: 'A' | 'B') => {
    if (team === 'A') {
      setTeamAScore(teamAScore + 1);
    } else if (team === 'B') {
      setTeamBScore(teamBScore + 1);
    }
  };

  const decreaseScore = (team: 'A' | 'B') => {
    if (team === 'A' && teamAScore > 0) {
      setTeamAScore(teamAScore - 1);
    } else if (team === 'B' && teamBScore > 0) {
      setTeamBScore(teamBScore - 1);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.teamContainer}>
        <Text style={styles.teamName}>Team A</Text>
        <Text style={styles.score}>{teamAScore}</Text>
        <View style={styles.buttonContainer}>
          <Button title="+1" onPress={() => increaseScore('A')} />
          <Button title="-1" onPress={() => decreaseScore('A')} />
        </View>
      </View>
      <View style={styles.teamContainer}>
        <Text style={styles.teamName}>Team B</Text>
        <Text style={styles.score}>{teamBScore}</Text>
        <View style={styles.buttonContainer}>
          <Button title="+1" onPress={() => increaseScore('B')} />
          <Button title="-1" onPress={() => decreaseScore('B')} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  teamContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  teamName: {
    fontSize: 20,
    marginRight: 10,
  },
  score: {
    fontSize: 24,
    fontWeight: 'bold',
    marginRight: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginLeft: 10,
  },
});
