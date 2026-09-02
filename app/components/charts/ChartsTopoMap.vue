<script setup lang="ts">
import { MapProjection } from '@unovis/ts'
import { WorldMapTopoJSON } from '@unovis/ts/maps'

const ChoroplethMapData = computed(() => [
  { id: 'NL', count: 94, name: 'Netherlands' },
  { id: 'US', count: 91, name: 'United States' },
  { id: 'DE', count: 71, name: 'Germany' },
  { id: 'BR', count: 60, name: 'Brazil' },
  { id: 'FR', count: 59, name: 'France' },
  { id: 'ID', count: 48, name: 'Indonesia' },
  { id: 'KE', count: 42, name: 'Kenya' },
  { id: 'GB', count: 35, name: 'United Kingdom' },
  { id: 'CA', count: 30, name: 'Canada' },
])

const worldData = computed(() => ({
  areas: ChoroplethMapData.value.map((d) => ({
    id: d.id,
    count: d.count,
    name: d.name,
  })),
}))
</script>

<template>
  <TopoJSONMap
    :height="400"
    map-feature-key="countries"
    :projection="MapProjection.Mercator()"
    :data="worldData"
    :topo-json="WorldMapTopoJSON"
    :zoom-factor="1.1"
  />
</template>
