describe('4. 반복 바닐라 (lib/repeatify.js)', function () {
    var str1 = 'korea';
    var str2 = 'america';
    var str3 = 'yolo';
    var vanilla = '_vanilla_';

    it('1번만 반복할 경우', function () {
        expect(str1.repeatify(1)).to.eql(str1);
        expect(str2.repeatify(1)).to.eql(str2);
        expect(str3.repeatify(1)).to.eql(str3);
    });

    it('2번 반복할 경우', function () {
        expect(str1.repeatify(2)).to.eql(str1 + vanilla + str1);
        expect(str2.repeatify(2)).to.eql(str2 + vanilla + str2);
        expect(str3.repeatify(2)).to.eql(str3 + vanilla + str3);
    });

    it('3번 반복할 경우', function () {
        expect(str1.repeatify(4)).to.eql(str1 + vanilla + str1 + vanilla + str1);
        expect(str2.repeatify(4)).to.eql(str2 + vanilla + str2 + vanilla + str2);
        expect(str3.repeatify(4)).to.eql(str3 + vanilla + str3 + vanilla + str3);
    });

    it('4번 반복할 경우', function () {
        expect(str1.repeatify(4)).to.eql(str1 + vanilla + str1 + vanilla + str1 + vanilla + str1);
        expect(str2.repeatify(4)).to.eql(str2 + vanilla + str2 + vanilla + str2 + vanilla + str2);
        expect(str3.repeatify(4)).to.eql(str3 + vanilla + str3 + vanilla + str3 + vanilla + str3);
    });

    it('5번 반복할 경우', function () {
        expect(str1.repeatify(4)).to.eql(str1 + vanilla + str1 + vanilla + str1 + vanilla + str1 + vanilla + str1);
        expect(str2.repeatify(4)).to.eql(str2 + vanilla + str2 + vanilla + str2 + vanilla + str2 + vanilla + str2);
        expect(str3.repeatify(4)).to.eql(str3 + vanilla + str3 + vanilla + str3 + vanilla + str3 + vanilla + str3);
    });
});
