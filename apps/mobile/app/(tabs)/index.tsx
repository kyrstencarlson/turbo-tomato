import { getInstruments } from '@/api/instruments';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FlatList, View, Text } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

export default function HomeScreen() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['instruments'],
    queryFn: getInstruments,
  });

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginVertical: 50 }}>
      <FlatList data={data} renderItem={({ item }) => <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{item.name}</Text>} />
    </View>
  );
}
