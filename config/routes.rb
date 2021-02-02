Rails.application.routes.draw do
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify' to: 'authentication#verify'
  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :users do
    resources :pantry
    resources :foods
    resources :lists
  end

end
