from django.shortcuts import render

def join(request):
    if request.method == 'POST':
        form = JoinForm(request.POST)
        if form.is_valid():
            username = form.cleaned_data['username']
            password = form.cleaned_data['password']
            email = form.cleaned_data['email']
            birth_year = form.cleaned_data['birth_year']
            birth_month = form.cleaned_data['birth_month']
            birth_day = form.cleaned_data['birth_day']
            phone_number = form.cleaned_data['phone_number']
            
            human_info = HumanInformation.objects.create(username=username, password=password, email=email, phone_number=phone_number, birth=f"{birth_year}-{birth_month}-{birth_day}")
            human_info.save()
            
            return redirect('/templates/mainMap/index.html')
    else:
        form = JoinForm()
    
    return render(request, '/templates/social/login.html', {'form': form})

def login(request):
    if request.method == 'POST':
        form = LoginForm(request.POST)
        if form.is_valid():
            # 폼이 유효한 경우 로그인 처리를 수행하고 리다이렉트합니다.
            # 이 부분은 로그인 처리에 맞게 적절한 코드로 변경되어야 합니다.
            return redirect('home')
    else:
        form = LoginForm()
    
    return render(request, 'login.html', {'form': form})

