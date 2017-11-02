describe('2. String 압축 (lib/compressString.js)', function () {
    it('empty string의 경우', function () {
        expect(compressString('')).to.equal('');
    });

    it('연속적으로 중복되는 알파벳이 없는 경우', function () {
        expect(compressString('abcd')).to.equal('abcd');
        expect(compressString('gidfj')).to.equal('gidfj');
        expect(compressString('kokoko')).to.equal('kokoko');
    });

    it('연속적으로 중복되는 알파벳이 있는 경우', function () {
        expect(compressString('aabbcc')).to.equal('abc');
        expect(compressString('aabcca')).to.equal('abca');
        expect(compressString('deefdd')).to.equal('defd');
    });
});
