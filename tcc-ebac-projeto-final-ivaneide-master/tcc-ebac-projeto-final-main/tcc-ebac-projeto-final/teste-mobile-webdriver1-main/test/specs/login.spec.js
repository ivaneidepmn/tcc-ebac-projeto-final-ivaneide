describe('Preencher Pagina Forms', () => {
    it('should fill forms page', async () => {
        await $('~Forms').click()
        await $('~text-input').setValue('Teste')
        expect(await $('~text-input')).toBeDisplayed()
        await $('~switch').click()
        await $('~Dropdown').click()
        expect(await $('id:select_dialog_listview')).toBeDisplayed()
        await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/androidx.appcompat.widget.LinearLayoutCompat/android.widget.FrameLayout/android.widget.ListView/android.widget.CheckedTextView[2]').click()
        expect(await $('id:select_dialog_listview')).toBeDisplayed()
        await driver.touchAction([ {action: 'longPress', x: 0, y: 1000}, { action: 'moveTo', x: 0, y: 10}, 'release' ]);
        await $('~button-Active').click()
        expect(await $('id:android:id/content')).toBeDisplayed()
    })
})