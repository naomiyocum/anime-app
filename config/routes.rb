Rails.application.routes.draw do
  get 'site/index'
  
  
  namespace :api do
    namespace :v1 do
      resources :animes, only: %i[index show create update destroy]
    end
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
