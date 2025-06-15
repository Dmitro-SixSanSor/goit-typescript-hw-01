type AllType = {
    name: string;
    position: number;
    color: string;
    weight: number;
  };
  
  function compare<T extends Pick<AllType, 'name' | 'color'>, U extends Pick<AllType, 'position' | 'weight'>>(
    top: T,
    bottom: U
  ): AllType {
    return {
      name: top.name,
      color: top.color,
      position: bottom.position,
      weight: bottom.weight,
    };
  }
  
  const result = compare(
    { name: "Apple", color: "Red" },
    { position: 1, weight: 150 }
  );
  console.log(result);