from django import forms

class JoinForm(forms.Form):
    username = forms.CharField(max_length=20, label='아이디')
    password = forms.CharField(max_length=20, widget=forms.PasswordInput, label='비밀번호')
    password_confirm = forms.CharField(max_length=20, widget=forms.PasswordInput, label='비밀번호 확인')
    email = forms.EmailField(label='이메일')
    birth_year = forms.IntegerField(label='출생 연도')
    birth_month = forms.IntegerField(label='월')
    birth_day = forms.IntegerField(label='일')
    phone_number = forms.CharField(max_length=11, label='휴대폰 번호')

    def clean(self):
        cleaned_data = super().clean()
        password = cleaned_data.get('password')
        password_confirm = cleaned_data.get('password_confirm')

        if password and password_confirm:
            if password != password_confirm:
                raise forms.ValidationError('비밀번호가 일치하지 않습니다.')
from django import forms

class LoginForm(forms.Form):
    id = forms.CharField(label='USER NAME')
    pw = forms.CharField(label='PASSWORD', widget=forms.PasswordInput)

