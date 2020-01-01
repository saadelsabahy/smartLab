
{
    answers.map((val) => {
        return (
            <TouchableOpacity key={val.value} onPress={this.radioClick.bind(this, val.value)}>
                <View style={{
                    height: 24,
                    width: 24,
                    borderRadius: 12,
                    borderWidth: 2,
                    borderColor: '#000',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    {
                        val.value === this.state.radioSelected ?
                            <View style={{
                                height: 12,
                                width: 12,
                                borderRadius: 6,
                                backgroundColor: '#000',
                            }} />
                            : null
                    }
                </View>
            </TouchableOpacity>
        )
    })
}